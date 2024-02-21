'use client';

import { Table } from 'flowbite-react';
import QuestionRow from './QuestionRow';

function RecentQuestions(){
  return (
    <div className=" max-h-full items-center max-h-96 lg:max-h-full overflow-y-scroll rounded-lg">
      <Table hoverable className='dark'>
        <Table.Head className='sticky top-0'>
          <Table.HeadCell>Questions</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Subject</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <QuestionRow question="Who invented the light bulb?" date="05/12" subject="Physics" color="success"/>
          <QuestionRow question="How are mountains formed?" date="04/12" subject ="Geography" color='purple'/>
          <QuestionRow question='Why do we have seasons?' date='02/16' subject='Geography' color='purple'/>
          <QuestionRow question='In 1945, which country initiated the second world war?' date='03/12' subject='history'/>
          <QuestionRow question="Why do we have seasons?" date="02/16" subject="Geography" color='purple'/>
          <QuestionRow question="What are the parts of a flower?" date="02/17" subject="Biology" />
          <QuestionRow question="Who built the pyramids?" date="02/18" subject="History" />
          <QuestionRow question="What is photosynthesis?" date="02/19" subject="Biology" />
          <QuestionRow question="How do computers work?" date="02/20" subject="Technology" />
          <QuestionRow question="What is gravity?" date="02/21" subject="Physics" />
          <QuestionRow question="Who discovered America?" date="02/22" subject="History" />
          <QuestionRow question="How do we see colors?" date="02/23" subject="Science" />
          <QuestionRow question="What causes earthquakes?" date="02/24" subject="Geography" color='purple'/>
        </Table.Body>
      </Table>
    </div>
  );
}

export default RecentQuestions;