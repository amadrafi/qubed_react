import { Card } from 'flowbite-react';

function SubjectCard(props) {
  return (
    <Card href="/" className="max-w-full min-h-full dark:bg-zinc-950 dark:hover:bg-zinc-900">
      <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.content}
      </p>

    </Card>
  );
}

export default SubjectCard;