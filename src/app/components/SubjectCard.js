import { Card } from 'flowbite-react';
import CircularProgress from '@mui/joy/CircularProgress';

function SubjectCard(props) {
  return (
    <div  className="h-full bg-white w-full text-white p-6 border-2 border-grey-100 rounded-lg">
      <p className="text-2xl font-semibold text-center text-black font-poppins capitalize">
        {props.title}
      </p>
      <div className='grid grid-cols-1 h-4/5 max-w-full'>
        <div className='flex flex-row py-2 text-black'>
          <CircularProgress variant="soft" color='primary' size='md' determinate value={props.understanding * 100} className='my-auto'/>
          <h1 className='my-auto font-poppins pl-3 text-xl font-semibold'>{props.understanding * 100}% <br/><span className='font-medium text-gray-500 text-base'> understanding score</span></h1>
        </div>
        <div className='flex flex-row py-2 text-black'>
          <CircularProgress variant='soft' color='danger' determinate size='md' value={props.engagement * 100} className='my-auto'/>
          <h1 className='my-auto font-poppins pl-3 text-xl font-semibold'>{props.engagement * 100}% <br/><span className='font-medium text-gray-500 text-base'> engagement score</span></h1>
        </div>
      </div>
    </div>
  );
}

export default SubjectCard;