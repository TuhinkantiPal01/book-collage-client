import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Banner.css";
import { AiOutlineArrowDown } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Banner = ({ title, subtitle, height }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <>
          <section className={`banner h-96 md:h-screen -mt-20 flex justify-center items-center`}>
            <div className='max-w-5xl mx-auto text-center space-y-1 md:space-y-5 text-[#E3F6FF]'>
              <h1 className='text-2xl md:text-5xl'>{title}</h1>
              <h5 className='text-xl md:text-3xl'>{subtitle}</h5>

              <>
                {" "}
                <h6 className='text-2xl'>Admission Now</h6>
                <span className='flex justify-center'>
                  <AiOutlineArrowDown size={40} />
                </span>
                <Link to='/admission'>
                  <PrimaryButton text='Admission Now' />
                </Link>
              </>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className={`banner h-${height} -mt-20 flex justify-center items-center`}>
            <div className='max-w-5xl mx-auto text-center space-y-5 text-[#E3F6FF]'>
              <h1 className='text-2xl md:text-5xl'>{title}</h1>
              <h5 className='text-xl md:text-3xl'>{subtitle}</h5>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Banner;
