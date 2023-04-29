// next imports

// other imports
import { AboutMe, ProExperience, Skills } from "@/components/index";
import { aboutMe, skillsData, proExpData } from "@/data/resume-data";
import Wrapper from "./components/shared/Wrapper";

// home FC component
export default function Home() {
  // home FC component return
  return (
    <>
      <Wrapper>
        <AboutMe data={aboutMe} />
        <Skills data={skillsData} />
        <ProExperience data={proExpData} />
      </Wrapper>
    </>
  );
}
