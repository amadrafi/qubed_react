'use client';
import { TextInput, Datepicker, Textarea, Button, Select, FileInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';


import UploadPicture from "../components/UploadPicture";
import axios from 'axios';
import { useState, useEffect } from 'react';


function AddLessons() {
  
  
  const router = useRouter();
  const subjects = [
    { name: 'Maths', color: 'purple' },
    { name: 'Geography', color: 'green' },
    { name: 'English', color: 'yellow' },
    { name: 'Physics', color: 'blue' },
    { name: 'History', color: 'red' },

  ];
  const [isDataAwaiting, setIsDataAwaiting] = useState(false);
  const [file, setFile] = useState(null);
  const [lessonName, setLessonName] = useState('Background');
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1637090405108-9353c06fd2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjQ3Mzd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDg1MjcyNTV8&ixlib=rb-4.0.3&q=80&w=1080")
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    lessonName: '',
    date: '', 
    subject: '', 
    extraNotes: '',
  });
  const [PDFData, setPDFData] = useState({});


  

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDateChange = (date) => {
    
    setFormData((prevData) => ({
      ...prevData,
      ["date"]: date,
    }));
  };

  
  const handleSubmit = async (event) => {
    setIsDataAwaiting(true);
    event.preventDefault();
    // You can access all form data in the formData object here
    console.log('Form Data:', formData);
    try {
      const response = await axios.post(
        'https://5fd3-92-237-138-59.ngrok-free.app/addLessonPlan/',
     
          formData, 
        
      )

      console.log(response.data);
      try{
        
        const formPDFData = new FormData();
        formPDFData.append("file", file);
        console.log(formPDFData);
        
        const response = await axios.post(
          'https://5fd3-92-237-138-59.ngrok-free.app/addLessonPDF/',
       
            formPDFData, 
          
        )
        console.log(response.data);


      } catch (error) {
        console.error(error);
      } 
      setIsDataAwaiting(false);
      router.push('/');
      
   
      return null;
      
   
    } catch (error) {
      console.error(error);
    }
  };

  const onFileChange = (event) => {
   
    setFile(event.target.files[0]);
   
};

  const refreshImage = async () => {
    setIsClicked(true);
    try {
      const response = await axios.get(
        `https://5fd3-92-237-138-59.ngrok-free.app/get_image/${formData.lessonName}`,
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        }
      );

      console.log(response.data);
      setImageUrl(response.data["image_url"])
      setIsClicked(false);
      return null;
   
    } catch (error) {
      console.error(error);
    }
  };



  
  return (
    <form onSubmit={handleSubmit} className='bg-slate-100 min-h-full'>

  
      <div className="bg-white-500 w-full h-[6vh] flex items-center sticky top-0">
    {/* <div className='bg-slate-100'> */}
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
  </svg>
    </div>
    <di className="flex justify-center items-center">
    <div className="relative bg-zinc-300 w-full h-[30vh] rounded-t-3xl flex flex-col">
  <img
    className="object-cover max-h-full rounded-t-3xl"
    src={imageUrl}
    alt="Your Image"
  />
  <div
    className="absolute bottom-0 right-0 w-8 h-8 bg-white flex items-center justify-center"

  >
    <svg className={`w-6 h-6 text-gray-800 dark:text-white ${isClicked ? "animate-spin 2s" : ""}`}
    onClick={refreshImage} style={{cursor:"pointer"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.7 7.7A7.1 7.1 0 0 0 5 10.8M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2M6 20v-4h4"/>
  </svg>
  </div>
</div>

    </di>

      <div class="bg-white-500 p-1 h-full">
        <div class="bg-white-500 flex flex-col justify-start  mt-16 mx-auto w-full max-w-[45vw] h-full">
          <p class="mt-0 font-poppins text-2xl font-semibold text-black">Add new Lesson</p>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Lesson name</p>
    <div class="w-1/2">
    <TextInput onChange={handleChange} name="lessonName" value={formData.lessonName} placeholder="Lesson name" required />
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Lesson plan</p>
    <div class="w-2/3">
    <FileInput onChange={onFileChange} name="file"/>
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Lesson date</p>
    <div class="w-1/2">
    <Datepicker required
       onSelectedDateChanged={(e) => handleDateChange(e)} name="date"/>
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Subject</p>
    <div class="w-1/2">
    <Select onChange={handleChange} name="subject" required>
  <option value="" disabled selected>
    Select a subject
  </option>
  {subjects.map((subject, index) => (
    <option key={index} value={subject.name}>
      {subject.name}
    </option>
  ))}
</Select>

    

   
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Extra notes</p>
    <div class="w-2/3">
    <Textarea value={formData.extraNotes} name="extraNotes" onChange={handleChange} id="comment" placeholder="Leave a comment..." rows={4} />
      </div>

  
   
      {isDataAwaiting ? (
      <Button size="sm" isProcessing className="mt-10 w-1/2 p-2">
        Uploading...
      </Button>
    ) : (
      <Button size="sm" type="submit" className="mt-10 w-1/2 p-2">
        Submit
      </Button>
    )}

    {/* <button type="submit" >Submit</button> */}


   
  </div>
</div>
</form>
// </div>

  );
}

export default AddLessons;
