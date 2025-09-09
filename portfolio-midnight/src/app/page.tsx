import HeaderSection from "./components/header/header";
import IntroSection from "./components/intro/intro";
import ExperienceSection from "./components/experience/experience";
import SkillsSection from "./components/skills/skills";
import content from './configuration/content.json';
import { Content } from "./interfaces/content.interface";

export default function Home() {

  let portfolioContent: Content | null = null;

  try {
    portfolioContent = content as Content;
  } catch(err) {
    console.log(err);
    return (
      <p>Error</p>
    )
  }

  if(!portfolioContent) {
    return <p>No content available!</p>  
  }

  return (
    <main>
      <HeaderSection configuration={portfolioContent.header} />
      <IntroSection configuration={portfolioContent.intro} />
      <ExperienceSection configuration={portfolioContent.experience} />
      <SkillsSection configuration={portfolioContent.skillsCategories} />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo recusandae architecto omnis dicta nulla minus debitis quis asperiores cumque! Qui, est! Sapiente saepe beatae eligendi quo quis possimus nesciunt.</p>
    </main>
  );
}
