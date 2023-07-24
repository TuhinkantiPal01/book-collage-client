import Banner from "../../../Components/Banner/Banner";
import CollageCard from "../../../Components/CollageCard/CollageCard";
import useCollage from "../../../Components/Hooks/collageHook";
import Loading from "../../../Components/Loading/Loading";

const Collage = () => {
  const [data, isLoading] = useCollage();
  console.log(data, isLoading);
  return (
    <section>
      <Banner title='Find Your Collage For Admission' subtitle='Choose Your Best One' height='96' />

      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 place-items-center my-20 gap-y-16">
            <CollageCard data={data} />
          </div>
        </>
      )}
    </section>
  );
};

export default Collage;
