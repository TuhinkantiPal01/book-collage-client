import Banner from "../../../Components/Banner/Banner";
import Addreview from "../AddReview/Addreview";
import Gallery from "../Gallery/Gallery";
import ReSearch from "../ReSearch/ReSearch";
import TopCollage from "../TopCollage/TopCollage";

const Home = () => {
  return (
    <div>
      <Banner title="BookMyCollage.com" subtitle="Find Your Best Collage" height="screen"/>
      <div className="max-w-5xl mx-auto">
        <TopCollage />
        <Gallery/>
        <ReSearch/>
        <Addreview/>
      </div>
    </div>
  );
};

export default Home;
