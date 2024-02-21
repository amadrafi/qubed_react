'use client'
import { Table } from 'flowbite-react';
import { Badge } from 'flowbite-react';


function QuestionRow(props) {
  return(
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 flex-col">
      <Table.Cell className="whitespace-normal font-small text-gray-900 dark:text-white">{props.question}</Table.Cell>
      <Table.Cell className='w-20'>{props.date}</Table.Cell>
      <Table.Cell className='w-32'><Badge color={props.color}> {props.subject} </Badge></Table.Cell>
    </Table.Row>
  );
}

export default QuestionRow;