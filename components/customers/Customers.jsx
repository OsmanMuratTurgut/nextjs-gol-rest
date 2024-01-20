
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomerItem from "./CustomerItem";
import Title from "../ui/Title";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center">Müşterilerimizin Yorumları</Title>
    
      <Slider {...settings}>
        <CustomerItem imgSrc="https://res.cloudinary.com/dyurhicc6/image/upload/v1705755084/gol-res/client1_pp11zz.jpg" />
        <CustomerItem imgSrc="https://res.cloudinary.com/dyurhicc6/image/upload/v1705755085/gol-res/client2_zcuu1g.jpg" />
        <CustomerItem imgSrc="https://res.cloudinary.com/dyurhicc6/image/upload/v1705755084/gol-res/client1_pp11zz.jpg" />
        <CustomerItem imgSrc="https://res.cloudinary.com/dyurhicc6/image/upload/v1705755085/gol-res/client2_zcuu1g.jpg" />
     
      </Slider>
    </div>
  );
};
export default Customers;