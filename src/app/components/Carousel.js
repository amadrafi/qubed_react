import { Carousel } from "flowbite-react";
import ClassCard from "./ClassCard";


function LessonCarousels() {
<<<<<<< Updated upstream
=======
  const [lessonData, setLessonData] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [futureLessons, setFutureLessons] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://5fd3-92-237-138-59.ngrok-free.app/getAllLessons/', {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        });

        setLessonData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderLessonGroups = (lessons) => {
    if (!lessons) return null;

    const groups = [];
    for (let i = 0; i < lessons.length; i += 3) {
      groups.push(lessons.slice(i, i + 3));
    }
    return groups.map((group, index) => (
      <div key={index} className="grid grid-cols-3 h-full w-full text-black overflow-x-hidden ">
        {group.map((lesson) => (
          <LessonCard key={lesson._id} lessonName={lesson.lessonName} image={lesson.lessonImage} id={lesson._id}/>
        ))}
      </div>
    ));
  };

>>>>>>> Stashed changes
  return (
    <Carousel indicators={false} slide={false}>
      <h1 className="text-center mx-auto">This is the lesson carousels 1</h1>
      <h1 className="text-center mx-auto">This is the lesson carousels 2</h1>
    </Carousel>
  );
}

export default LessonCarousels;