import { Carousel } from "flowbite-react";


function LessonCarousels() {
  return (
    <div className="w-full h-full px-1 mx-2">
      <h1 className=" pl-5 py-2 text-medium text-lg">Recent lessons</h1>
      <Carousel indicators={false} slide={false} className="dark h-5/6 text-center">
        <div className='grid grid-cols-3 h-full w-full  text-black overflow-x-hidden'>
          <div className="bg-pink-400 rounded-lg mx-1">History 2</div>
          <div className="bg-blue-200 rounded-lg mx-1">Biology</div>
          <div className="bg-green-300 rounded-lg mx-1">Mathematics</div>
        </div>
        <div className='grid grid-cols-3 h-full w-full text-black overflow-x-hidden'>
          <div className="bg-pink-400 rounded-lg mx-1">History 2</div>
          <div className="bg-blue-200 rounded-lg mx-1">Biology</div>
          <div className="bg-green-300 rounded-lg mx-1">Mathematics</div>
        </div>
        <div className='grid grid-cols-3 h-full w-full text-black overflow-x-hidden'>
          <div className="bg-pink-400 rounded-lg mx-1">History 2</div>
          <div className="bg-blue-200 rounded-lg mx-1">Biology</div>
          <div className="bg-green-300 rounded-lg mx-1">Mathematics</div>
        </div>
      </Carousel>
    </div>
  );
}

export default LessonCarousels;