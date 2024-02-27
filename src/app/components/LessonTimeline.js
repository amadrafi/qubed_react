
'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function LessonTimeline(props) {
  const activities = props.activities

  return (
    <Timeline>
        {activities.map((activity) => (
      <Timeline.Item key={activity.id}>
        <Timeline.Point/>
        <Timeline.Content>
          <Timeline.Time>{activity.duration}</Timeline.Time>
          <Timeline.Title>{activity.type}</Timeline.Title>
          <Timeline.Body>
          {activity.description}
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
        ))}

    </Timeline>
  );
}
export default LessonTimeline;
