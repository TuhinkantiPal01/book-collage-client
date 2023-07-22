import CollageCard from "../../../Components/CollageCard/CollageCard";
import useCollage from "../../../Components/Hooks/collageHook";
import Loading from "../../../Components/Loading/Loading";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const TopCollage = () => {
  const [data, isLoading] = useCollage();
  const topCollage = data?.sort((a,b) => b.rating - a.rating);
  const topThreeCollage = topCollage.slice(0,3);
  console.log(topThreeCollage);

  return (
    <section className='py-16'>
      <PageTitle title="Top Collages"/>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 mt-16 place-items-center">
            <CollageCard data={topThreeCollage} />
          </div>
        </>
      )}
    </section>
  );
};

export default TopCollage;
