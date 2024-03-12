import { Card } from 'flowbite-react';
import CircularProgress from '@mui/joy/CircularProgress';




function SubjectCard(props) {
  return (
    <div  className="h-full bg-slate-700 w-full text-white p-6">
      <p className="text-2xl font-bold text-center text-white ">
        {props.title}
      </p>
      <div className='flex flex-row py-2'>
        <CircularProgress variant="soft" color='primary' determinate value={props.understanding * 100} />

      </div>
      <div className='flex flex-row py-2'>
        <CircularProgress variant='soft' determinate value={props.engagement * 100} />
      </div>
    </div>
  );
}

export default SubjectCard;