import Link from "next/link";
import Carousel from './components/Carousel';
import RecentQuestions from "./components/RecentQuestions";
import ClassSummaries from "./components/ClassSummaries";
import UploadPicture from "./components/UploadPicture";
import UnderstandingGraph from "./components/UnderstandingGraph";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-full flex flex-col">
      <div className="bg-blue-300 flex-auto flex flex-row">
        <div className="basis-2/3 bg-gray-300 flex items-center text-black">
          <Carousel />
        </div>
        <div className="basis-1/3 bg-gray-400 flex items-center">
          <RecentQuestions />
        </div>
      </div>
      <div className="bg-red-100 flex-auto flex-row flex">
        <div className="basis-1/3 bg-gray-500 flex items-center">
          <ClassSummaries />
        </div>
        <div className="basis-1/3 bg-gray-600 flex items-center">
          <UploadPicture />
        </div>
        <div className="basis-1/3 bg-gray-700 flex items-center">
          <UnderstandingGraph />
        </div>
      </div>
    </div>
  );
}