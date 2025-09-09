import { Header } from '@/app/interfaces/content.interface';
import styles from './header.module.scss'; 

type Props = {
  configuration: Header;
}

const HeaderSection: React.FC<Props> = ({configuration}) => {
  
  const {
    presentation,
    name,
    complement,
    button,
    link
  } = configuration;
  
  return (
    <section className={styles.header}>
      <div className={styles.presentation}>
        <h2>{presentation} <span className={styles.name}>{name}</span></h2>
        <h2>{complement}</h2>
      </div>
      { button && <button>{button.label}</button>}
      { link && <a href={link.href}>{link.label}</a> } 
    </section>
  )
}

export default HeaderSection;
