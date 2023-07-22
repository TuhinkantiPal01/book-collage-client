import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-96'>
      <PropagateLoader color='#36d7b7' />
    </div>
  );
};

export default Loading;
