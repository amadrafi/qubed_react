
'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function LessonTimeline() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point/>
        <Timeline.Content>
          <Timeline.Time>10 min</Timeline.Time>
          <Timeline.Title>Introduction</Timeline.Title>
          <Timeline.Body>
          Teacher tells a story relating to area (e.g., land, plantation) to introduce the lesson.
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>5 min</Timeline.Time>
          <Timeline.Title>Group Activity</Timeline.Title>
          <Timeline.Body>
          Pupils make 5 or 6 groups. Each group receives a sheet with printed rectangles and small square cut-outs. Pupils cover rectangles with cut-outs.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
export default LessonTimeline;
