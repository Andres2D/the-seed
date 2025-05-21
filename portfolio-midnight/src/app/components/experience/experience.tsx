import { Experience } from '@/app/interfaces/content.interface';
import styles from './experience.module.scss';
import TimelineComponent from './timeline/timeline';

type Props = {
  configuration: Experience[];
};

const ExperienceSection: React.FC<Props> = ({ configuration }) => {
  return (
    <section className={styles.experience}>
      <h2>Experience</h2>
      <TimelineComponent items={configuration} />
    </section>
  );
};

export default ExperienceSection;
