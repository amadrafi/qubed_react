'use client'
import { Table } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import Link from 'next/link';


function QuestionRow(props) {
  return(
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-normal font-medium text-gray-900 dark:text-white">{props.question}</Table.Cell>
      <Table.Cell className=''>{props.date}</Table.Cell>
      <Table.Cell ><Badge color={props.color}> {props.subject} </Badge></Table.Cell>
      <Table.Cell>
        <Link href={"/classes/" +  props.link} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          Details
        </Link>
      </Table.Cell>
    </Table.Row>
  );
}

export default QuestionRow;