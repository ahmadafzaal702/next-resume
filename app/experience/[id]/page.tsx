// next imports

// other imports
import Wrapper from "@/components/shared/Wrapper";
import { proExpData } from "@/data/resume-data";

// experience detail FC
const ExpDetail = ({ params }: { params: any }) => {
  // destructuring the elements from data's
  const { id } = params;
  const { experiences } = proExpData;

  // comparing and getting the single item based on the slug and id
  const singleItem = experiences?.find((item) => {
    return item.slug == id;
  });

  // experience detail FC return
  return (
    <>
      <Wrapper>
        <h2 className="uppercase">{singleItem?.role}</h2>
        <p className="pt-5">{singleItem?.description}</p>
      </Wrapper>
    </>
  );
};

export default ExpDetail;
