import Image from 'next/image';
import styles from './intro.module.scss'; 
import { mockProfile } from '../../assets';

type Props = {
  configuration: any;
}

const IntroSection: React.FC<Props> = ({configuration}) => {
  
  const {
    image,
    description
  } = configuration;
  
  return (
    <section className={styles.intro}>
      <h2>About</h2>
      <div className={styles.description}>
        <Image 
          src={mockProfile} 
          alt='Profile picture'
          width={280}
          className={styles.profile}
        />
        <p dangerouslySetInnerHTML={{__html: description}}></p>
      </div>
    </section>
  )
}

export default IntroSection;
