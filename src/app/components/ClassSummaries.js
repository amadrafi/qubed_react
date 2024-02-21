import { Carousel } from 'flowbite-react';
import SubjectCard from './SubjectCard';

function ClassSummaries(){
  return (
    <Carousel className='rounded-none dark' slide={false} indicators={false}>
      <SubjectCard title="Geography" content="Class summary" />
      <SubjectCard title="Mathematics" content="Class summary" />
      <SubjectCard title="Further Mathematics" content='Class summary' />
    </Carousel>
  );
}

export default ClassSummaries;