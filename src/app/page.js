

import LessonCarousels from './components/Carousel';
import RecentQuestions from "./components/RecentQuestions";
import ClassSummaries from "./components/ClassSummaries";
import UploadPicture from "./components/UploadPicture";
import UnderstandingGraph from "./components/UnderstandingGraph";

export default function Home() {
  return (
    <div className=" bg-zinc-800 text-white min-h-full flex flex-col">
      <div className=" flex-auto flex flex-row">
        <div className="basis-2/3 flex items-center">
          <LessonCarousels />
        </div>
        <div className="basis-1/3 flex items-center">
          <RecentQuestions />
        </div>
      </div>
      <div className="flex-auto flex-row flex">
        <div className="basis-1/3 flex items-center">
          <ClassSummaries />
        </div>
        <div className="basis-1/3 flex items-center">
          <UploadPicture />
        </div>
        <div className="basis-1/3 bg-gray-600 flex items-center">
          <UnderstandingGraph />
        </div>
      </div>
    </div>
  );
}