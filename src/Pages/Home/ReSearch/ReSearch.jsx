import Marquee from "react-fast-marquee";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const ReSearch = () => {
  return (
    <div>
      <PageTitle title='ReSearch By Students' />

      <div className="my-16">
        <Marquee speed={60} pauseOnHover={true} gradient gradientWidth={150}>
          <a className="text-xl text-blue-500 underline ml-10" href='#'>ReSearch</a>
          <a className="text-xl text-blue-500 underline ml-10" href='#'>ReSearch</a>
          <a className="text-xl text-blue-500 underline ml-10" href='#'>ReSearch</a>
          <a className="text-xl text-blue-500 underline ml-10" href='#'>ReSearch</a>
          <a className="text-xl text-blue-500 underline ml-10" href='#'>ReSearch</a>
          <a className="text-xl text-blue-500 underline ml-10" href='#'>ReSearch</a>
        </Marquee>
      </div>
    </div>
  );
};

export default ReSearch;
