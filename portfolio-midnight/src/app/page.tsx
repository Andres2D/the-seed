import HeaderSection from "./components/header/header";
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
    </main>
  );
}
