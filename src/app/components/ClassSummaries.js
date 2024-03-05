import { Carousel } from 'flowbite-react';
import ClassCard from './ClassCard';

function ClassSummaries(){
  return (
    <Carousel className='rounded-none dark' slide={false} indicators={false}>
      <ClassCard title="Geography" content="Class summary" />
      <ClassCard title="Mathematics" content="Class summary" />
      <ClassCard title="Further Mathematics" content='Class summary' />
    </Carousel>
  );
}

export default ClassSummaries;