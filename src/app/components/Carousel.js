import { Carousel } from "flowbite-react";
import ClassCard from "./ClassCard";


function LessonCarousels() {
  return (
    <Carousel indicators={false} slide={false}>
      <h1 className="text-center mx-auto">This is the lesson carousels 1</h1>
      <h1 className="text-center mx-auto">This is the lesson carousels 2</h1>
    </Carousel>
  );
}

export default LessonCarousels;