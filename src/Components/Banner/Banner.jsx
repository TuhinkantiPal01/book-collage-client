import { useLocation } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Banner.css";
import { AiOutlineArrowDown } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Banner = ({ title, subtitle , height }) => {
  const location = useLocation();

  return (
    <section className={`banner  h-${height} -mt-20 flex justify-center items-center`}>
      <div className='max-w-5xl mx-auto text-center space-y-5 text-[#E3F6FF]'>
        <h1 className='text-5xl'>{title}</h1>
        <h5 className='text-3xl'>{subtitle}</h5>
        {location.pathname === "/" && (
          <>
            {" "}
            <h6 className='text-2xl'>Admission Now</h6>
            <span className='flex justify-center'>
              <AiOutlineArrowDown size={40} />
            </span>
            <PrimaryButton />
          </>
        )}
      </div>
    </section>
  );
};

export default Banner;
