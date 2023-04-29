// next imports
import Link from "next/link";

// other imports
import { proExpInterface } from "@/data/resume-data";

// Professional Experience FC component
const ProExperience = ({ data }: { data: proExpInterface }) => {
  // destructuring the elements from data

  const { title, experiences } = data;
  // Professional Experiences FC component return
  return (
    <>
      <section className="mt-8">
        <h2 className="uppercase">{title}</h2>
        <div>
          {/* implementating the functionality  */}
          {experiences?.map((item, id) => {
            return (
              <div
                key={id}
                className={`bg-grey-light p-6 mt-3 border-t-8 ${
                  item.current === true ? "border-green" : "border-grey"
                } `}
              >
                <Link href={`/experience/${item.slug}`}>
                  <h4 className="uppercase">{item.role}</h4>
                </Link>
                <p className="mt-3">{item.description}</p>
                <Link href={`/experience/${item.slug}`}>
                  <p className="text-black mt-3 font-semibold">Read More</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProExperience;
