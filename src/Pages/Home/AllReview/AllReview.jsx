import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Navigation } from "swiper/modules";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import useReview from "../../../Components/Hooks/userReview";

const AllReview = () => {
  const [data] = useReview();

  console.log(data);

  return (
    <section>
      <PageTitle title='Reviews' />

      <div className='py-20'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className='mySwiper'
        >
          {data?.map((review, index) => (
            <SwiperSlide key={index}>
              <div key={index}>
                <p><span className="font-bold">User Name</span> : {review?.name}</p>
                <p><span className="font-bold">User Email</span>  : {review?.email}</p>
                <p><span className="font-bold">college Name</span> : {review.college}</p>
                <p><span className="font-bold">Rating</span> : {review.rating}</p>
                <p>Review : {review?.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AllReview;
