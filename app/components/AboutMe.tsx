// next imports
// other imports
import { aboutMeInterface } from "../data/resume-data";

// AboutMe FC component
const AboutMe = ({ data }: { data: aboutMeInterface }) => {
  // destructuring the elements from aboutMe Data
  const { title, body } = data;
  // AboutMe FC component return
  return (
    <>
      <section>
        <h2 className="mb-3 uppercase">{title}</h2>

        {body?.map((item, i) => {
          return (
            <p className="mt-3 text-justify" key={i}>
              {item}
            </p>
          );
        })}
      </section>
    </>
  );
};

export default AboutMe;
