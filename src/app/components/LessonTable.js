import { Table, Badge, Progress } from 'flowbite-react';
function LessonTable(props){

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

    const completedLessonData = props.lessonData;


    return(

        
    <div className="overflow-x-auto">
        <Table hoverable>
            <Table.Head>
            <Table.HeadCell>Lesson Name</Table.HeadCell>
            <Table.HeadCell>Subject</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Understanding score</Table.HeadCell>
            <Table.HeadCell>
                <span className="sr-only">View Details</span>
            </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
            {completedLessonData.map((lesson) => (

                <Table.Row key={lesson._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {lesson.lessonName}
                </Table.Cell>
                <Table.Cell><Badge color="purple">{lesson.subject}</Badge></Table.Cell>
                <Table.Cell>{formatDate(lesson.date)}</Table.Cell>
                <Table.Cell>

                <Progress
                progress={45}
                progressLabelPosition="inside"
                textLabel=""
                textLabelPosition="outside"
                size="lg"
                labelProgress
                labelText
                />
                </Table.Cell>
                <Table.Cell>
                <a href={`/classes/${lesson._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                View Details
                </a>
                </Table.Cell>
                </Table.Row>




            ))}
          
        </Table.Body>
      </Table>
    </div>

    )
}

export default LessonTable;