import Image from 'next/image';
import styles from './skill-card.module.scss';
import { HTML } from '../../../assets';
import { Skill } from '@/app/interfaces/content.interface';

type Props = {
  skillProperties: Skill;
};

const SkillsCard: React.FC<Props> = ({ skillProperties }) => {

  const {
    title,
    color
  } = skillProperties;

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: color
      }}
      title={title}
    >  
      <Image 
        className={styles.logo}
        src={HTML}
        alt={title}
      />
    </div>
  );
};

export default SkillsCard;
