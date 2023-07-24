import Banner from "../../../Components/Banner/Banner";
import AddReview from "../AddReview/Addreview";
import Gallery from "../Gallery/Gallery";
import ReSearch from "../ReSearch/ReSearch";
import Topcollage from "../TopCollage/TopCollage";


const Home = () => {
  return (
    <div>
      <Banner title="BookMyCollege.com" subtitle="Find Your Best college" height="screen"/>
      <div className="max-w-5xl mx-auto">
        <Topcollage />
        <Gallery/>
        <ReSearch/>
        <AddReview/>
      </div>
    </div>
  );
};

export default Home;
