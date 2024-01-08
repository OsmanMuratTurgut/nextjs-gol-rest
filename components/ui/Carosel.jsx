import Image from "next/image";
import Title from "./Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/sis-2.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Burdur Şiş Menü Kampanya</Title>
            <p className="sm:w-2/5 w-full">
              Çorba - Tek Burdur Şiş - Salata - İçecek
            </p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              150 TL
            </button>
            <button className="btn-primary">Online Sipariş</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Pide Menü Kampanya</Title>
            <p className="sm:w-2/5 w-full">
              Çorba - Tek Pide - Salata - İçecek
            </p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              120 TL
            </button>
            <button className="btn-primary">Online Sipariş</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Kavurma Menü Kampanya</Title>
            <p className="sm:w-2/5 w-full">Çorba - Kavurma - Salata - İçecek</p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              170 TL
            </button>
            <button className="btn-primary">Online Sipariş</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Tandır Kebap Menü Kampanya</Title>
            <p className="sm:w-2/5 w-full">Çorba - Tandır Kebap - Salata - İçecek</p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              230 TL
            </button>
            <button className="btn-primary">Online Sipariş</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
