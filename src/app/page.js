

import LessonCarousels from './components/Carousel';
import RecentQuestions from "./components/RecentQuestions";
import ClassSummaries from "./components/ClassSummaries";
import UnderstandingGraph from "./components/UnderstandingGraph";

export default function Home() {
  return (
    <div className=" bg-zinc-800 text-white h-full max-w-full flex flex-col pt-3 p-2">
      <div className="flex flex-row h-3/6">
        <div className="w-3/5 flex">
          <LessonCarousels />
        </div>
        <div className="w-2/5 flex items-start pb-2">
          <RecentQuestions />
        </div>
      </div>
      <div className="flex-row flex flex-auto">
        <div className="w-1/3 px-4  py-2 flex items-center">
          <ClassSummaries />
        </div>
        <div className="w-1/3 flex items-center">
          <h1 className='mx-auto text-center'>
            FREE SPACE!!!
          </h1>
          {/* <UploadPicture /> */}
        </div>
        <div className="w-1/3 flex items-center">
          <UnderstandingGraph />
        </div>
      </div>
    </div>
  );
}