'use client';
import { TextInput, Datepicker, Dropdown, Textarea, Badge } from 'flowbite-react';
import UploadPicture from "../components/UploadPicture";

function addLessons() {
  
  return (
    <div className='bg-slate-100 min-h-full'>

  
    <div className="bg-white-500 w-full h-[6vh] flex items-center sticky top-0">
    {/* <div className='bg-slate-100'> */}
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
  </svg>
    </div>
    <di className="flex justify-center items-center">
    <div className="bg-zinc-300 w-full h-[30vh] rounded-t-3xl flex flex-col">
    <img class="object-cover max-h-full rounded-t-3xl" src="https://images.unsplash.com/photo-1637090405108-9353c06fd2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjQ3Mzd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDg1MjcyNTV8&ixlib=rb-4.0.3&q=80&w=1080" />
    </div>
    </di>

    <div class="bg-white-500 p-1 h-full">
  <div class="bg-white-500 flex flex-col justify-start  mt-16 mx-auto w-full max-w-[45vw] h-full">
    <p class="mt-0 font-poppins text-2xl font-semibold text-black">Add new Lesson</p>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Lesson name</p>
    <div class="w-1/2">
    <TextInput id="email1" type="email" placeholder="Lesson name" required />
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Lesson plan</p>
    <div class="w-2/3">
    <UploadPicture />
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Lesson date</p>
    <div class="w-1/2">
    <Datepicker />
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Subject</p>
    <div class="w-1/2">
    <Dropdown label="Select subject" placement="bottom" style={{ backgroundColor: 'white', color:'black' }} >
      <Dropdown.Item><Badge color="green"> Physics </Badge></Dropdown.Item>
      <Dropdown.Item><Badge color="purple"> Geography </Badge></Dropdown.Item>
      <Dropdown.Item><Badge color="blue"> History </Badge></Dropdown.Item>
    </Dropdown>

   
    </div>

    <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Extra notes</p>
    <div class="w-2/3">
    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
      </div>
   


    <button class="bg-blue-500 h-[6vh] w-1/2 mt-16 rounded-xl">Submit</button>

   
  </div>
</div>
</div>
// </div>

  );
}

export default addLessons;