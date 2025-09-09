'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from '@/app/interfaces/content.interface';
import styles from './timeline.module.scss';
import { JobIcon, EducationIcon } from '../../../assets';

type Props = {
  items: Experience[];
};

const TimelineComponent: React.FC<Props> = ({ items }) => {

  const experienceMap = items.map(({
    key, 
    title, 
    place, 
    description,
    initialDate,
    endDate,
    placeLink,
    icon
  }) => {
    return ( 
      <VerticalTimelineElement
          key={key}
          className={`vertical-timeline-element--work ${styles.timeline}`}
          contentStyle={{ background: 'white', color: '#3953AB' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          dateClassName={styles.dates}
          date={`${initialDate} - ${endDate ?? 'Present'}`}
          iconStyle={{ background: 'white' }}
          icon={icon === 'job' ? <JobIcon /> : (icon === 'education' ? <EducationIcon /> : '')}
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        {
          placeLink && <a 
            className="vertical-timeline-element-subtitle" 
            href={placeLink}
            target='_blank'
          >{place}</a>
        }
        {
          !placeLink && <h4 className="vertical-timeline-element-subtitle">{place}</h4>
        }
        <p>{description}</p>
      </VerticalTimelineElement>
    )
  })

  return (
    <VerticalTimeline>
      {experienceMap}
    </VerticalTimeline>
  )

};

export default TimelineComponent;
