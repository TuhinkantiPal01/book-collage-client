
import CollageCard from "../../../Components/CollageCard/CollageCard";
import usecollage from "../../../Components/Hooks/collageHook";
import Loading from "../../../Components/Loading/Loading";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const TopCollage = () => {
  const [data, isLoading] = usecollage();
  const topCollage = data?.sort((a,b) => b.rating - a.rating);
  const topThreeCollage = topCollage.slice(0,3);

  return (
    <section className='py-16'>
      <PageTitle title="Top collages"/>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-y-5  md:grid-cols-3 gap-x-10 mt-16 place-items-center">
            <CollageCard data={topThreeCollage}/>
          </div>
        </>
      )}
    </section>
  );
};

export default TopCollage;
