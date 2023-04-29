// Individual skills FC component
const Iskill = ({ data }: { data: any }) => {
  // destructuing the elements from data
  const { icon, text } = data;
  // return start
  return (
    <p className="mt-3 bg-green-light p-2 rounded-xl">
      {icon}
      &nbsp;
      {text}
    </p>
  );
};

export default Iskill;
