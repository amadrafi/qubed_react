'use client';

import { Table } from 'flowbite-react';
import QuestionRow from './QuestionRow';

function RecentQuestions(){
  return (
    <div className="h-full overflow-y-scroll overflow-x-hidden rounded-lg">
      <Table hoverable className=' font-poppins'>
        <Table.Head className='sticky top-0 text-black text-sm bg-white'>
          <Table.HeadCell className=''>Recent Questions</Table.HeadCell>
          <Table.HeadCell className=''>Date</Table.HeadCell>
          <Table.HeadCell className=''>Subject</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <QuestionRow question="Who invented the light bulb?" date="05/12" subject="Physics" color="success" link='1'/>
          <QuestionRow question="How are mountains formed?" date="04/12" subject ="Geography" color='purple' link='1'/>
          <QuestionRow question='Why do we have seasons?' date='02/16' subject='Geography' color='purple' link='1'/>
          <QuestionRow question='In 1945, which country initiated the second world war?' date='03/12' subject='history' link='1'/>
          <QuestionRow question="Why do we have seasons?" date="02/16" subject="Geography" color='purple' link='1'/>
          <QuestionRow question="What are the parts of a flower?" date="02/17" subject="Biology" link='1'/>
          <QuestionRow question="Who built the pyramids?" date="02/18" subject="History"  link='1'/>
          <QuestionRow question="What is photosynthesis?" date="02/19" subject="Biology"  link='1'/>
          <QuestionRow question="How do computers work?" date="02/20" subject="Technology"  link='1'/>
          <QuestionRow question="What is gravity?" date="02/21" subject="Physics"  link='1'/>
          <QuestionRow question="Who discovered America?" date="02/22" subject="History"  link='1'/>
          <QuestionRow question="How do we see colors?" date="02/23" subject="Science"  link='1'/>
          <QuestionRow question="What causes earthquakes?" date="02/24" subject="Geography" color='purple' link='1'/>
        </Table.Body>
      </Table>
      <div className='h-0 w-full bg-white sticky bottom-0'>
      </div>
    </div>
  );
}

export default RecentQuestions;