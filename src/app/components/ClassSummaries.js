import { Carousel } from 'flowbite-react';
import SubjectCard from './SubjectCard';
import axios from 'axios';
import { useEffect,  useState} from 'react';
import { Spinner } from 'flowbite-react';



function ClassSummaries(){
  const [subjectData, setSubjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://aab0-192-41-114-226.ngrok-free.app/getSubjects/', {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        });

        setSubjectData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderClassSummaries = (lessons) => {
    if (!lessons) return null;

    return lessons.map((lesson) => (
      <SubjectCard key={lesson._id} title={lesson.subject} understanding={lesson.understanding} engagement={lesson.engagement}/>
    ))
    
        
  };

  return (
    <div className='w-full h-full'>
      {loading ? (
        // Render spinner component while loading
        <div className="flex justify-center items-center h-full w-full">
          <Spinner size="xl"/> {/* Replace Spinner with your actual spinner component */}
        </div>
      ) : (
        // Render carousel once data is loaded
        <Carousel className='rounded-none' slideInterval={3500} slide={false} indicators={false} pauseOnHover>
          {renderClassSummaries(subjectData)}
        </Carousel>
      )}
    </div>
  );
}

export default ClassSummaries;