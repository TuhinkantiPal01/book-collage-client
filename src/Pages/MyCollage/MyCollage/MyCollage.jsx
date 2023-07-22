import Banner from "../../../Components/Banner/Banner";

const MyCollage = () => {
    return (
        <section>
            <Banner title="My Collage" subtitle="Your Selected Collages" height="96"/>

            <div className="max-w-5xl mx-auto min-h-[300px] flex justify-center items-center">
                <h3>You Have No Selected Collage</h3>
            </div>
        </section>
    );
};

export default MyCollage;