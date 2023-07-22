import "./style.css";

const PageTitle = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className='title text-center text-3xl border-b-2'>{title}</h1>
    </div>
  );
};

export default PageTitle;
