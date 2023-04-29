// next imports
import Image from "next/image";

// other imports
import afzaalPic from "@/assests/afzaal.jpg";
import { personalData } from "@/data/resume-data";
import { Envelope, Linkedin, Twitter } from "./icons/index";

// sidebar FC component
const Sidebar = () => {
  // destructuring the elements from personalData
  const { name, role, education, contactLinks } = personalData;

  // sidebar FC component return
  return (
    <>
      <div className="bg-black h-auto sm:h-screen w-full sm:w-1/3 sm:fixed flex flex-col">
        <div className="text-white flex flex-col items-center p-10 text-center">
          <Image
            src={afzaalPic}
            priority
            width={250}
            height={250}
            alt="Afzaal Ahmad"
            className="rounded-full mb-5"
          />
          <h1 className="mb-2">{name}</h1>
          <h2 className="mb-8">{role}</h2>
          <p className="mb-2">{education[0]}</p>
          <p className="mb-2">{education[1]}</p>

          {/* contact links div */}

          <div className="mt-4 sm:mt-8 flex flex-col items-center">
            <h3>CONTACT ME</h3>

            <div className="flex gap-3 items-center mt-3">
              <a href={contactLinks[0]} className="icons-contactme">
                <Envelope />
              </a>
              <a
                href={contactLinks[1]}
                className="icons-contactme"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                href={contactLinks[2]}
                className="icons-contactme"
                target="_blank"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
