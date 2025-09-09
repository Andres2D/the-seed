import styles from './skills.module.scss';
import SkillsCard from './card/skill-card';
import { HTML } from '../../assets';
import { Skill, SkillsCategory } from '@/app/interfaces/content.interface';


type Props = {
  configuration: SkillsCategory[];
}

const SkillsSection: React.FC<Props> = ({configuration}) => {

  const skillsMap = (skills: Skill[]) => {
    return skills.map((skill) => {
      return (
        <SkillsCard 
          key={skill.key}
          skillProperties={skill} 
        />
      )
    });
  };

  const categoriesMap = configuration.map(({key, name, skills}) => {
    return (
      <section 
        key={key}
        className={styles.category}
      >
        <h3>{name}</h3>
        <div className={styles.skillsList}>
          {skillsMap(skills)}
        </div>
      </section>
    )
  });
  
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.categories}>
        {categoriesMap}
      </div>
    </section>
  )
}

export default SkillsSection;
