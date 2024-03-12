'use client';

import LessonCarousels from './components/Carousel';
import RecentQuestions from "./components/RecentQuestions";
import ClassSummaries from "./components/ClassSummaries";
import UnderstandingGraph from "./components/UnderstandingGraph";

export default function Home() {
  return (
    <div className="bg-slate-100 text-white h-full max-w-full flex flex-col pt-3 p-2">
      <div className="flex flex-row h-3/6">
        <div className="w-full flex pb-2">
          <LessonCarousels />
        </div>
        {/* <div className="w-2/5 flex items-start pb-2"> */}
          {/* <RecentQuestions /> */}
        {/* </div> */}
      </div>
      <div className="flex-row flex flex-auto h-3/6">
        <div className="w-1/4 p-1 flex items-center">
          <ClassSummaries />
        </div>
        <div className="w-2/4 flex items-center p-1">
          {/* <h1 className='mx-auto text-center text-black'>
            FREE SPACE!!!
          </h1> */}
          <RecentQuestions />
          {/* <UploadPicture /> */}
        </div>
        <div className="w-1/4 p-1 flex items-center">
          <UnderstandingGraph />
        </div>
      </div>
    </div>
  );
}