import { Carousel } from "flowbite-react";


function LessonCarousels() {
  return (
    <div className="w-full h-full px-1 mr-2 bg-white rounded-lg">
      <h1 class="font-poppins text-2xl font-semibold text-black mb-2 mt-2 pl-4">Recent lessons</h1>
      <Carousel indicators={false} slide={false} className="dark h-5/6 text-center">
        <div className='grid grid-cols-3 h-full w-full  text-black overflow-x-hidden'>
          <div className="bg-pink-400 rounded-lg mx-1 font-poppins">History 2</div>
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