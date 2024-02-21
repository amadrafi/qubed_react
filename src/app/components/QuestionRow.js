'use client'
import { Table } from 'flowbite-react';
import { Badge } from 'flowbite-react';


function QuestionRow(props) {
  return(
    <Table.Row className="border-zinc-600 bg-zinc-700 flex-col hover:bg-zinc-600">
      <Table.Cell className="whitespace-normal font-small text-gray-900 text-white">{props.question}</Table.Cell>
      <Table.Cell className='text-gray-400'>{props.date}</Table.Cell>
      <Table.Cell ><Badge color={props.color}> {props.subject} </Badge></Table.Cell>
    </Table.Row>
  );
}

export default QuestionRow;