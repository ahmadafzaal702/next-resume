// next imports

// other imports
import { AboutMe, ProExperience, Skills } from "@/components/index";
import { aboutMe, skillsData, proExpData } from "@/data/resume-data";

// home FC component
export default function Home() {
  // home FC component return
  return (
    <>
      <main className="p-8 sm:p-12">
        <AboutMe data={aboutMe} />
        <Skills data={skillsData} />
        <ProExperience data={proExpData} />
      </main>
    </>
  );
}
