import Image from "next/image";
import Title from "../ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
        <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/restaurant-1.jpeg" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">GÖLHİSAR RESTAURANT</Title>
          <p className="my-5 flex flex-col items-center">
            Meşhur SAÇ KAVURMAMİZ IZGARA VE PİDE çeşitlerimiz SULU yemeklerimiz
            ile siz değerli MUSAFİRLERİMİZİ Ağırlamaktan onur duyarız
          </p>
          <button className="btn-primary">Devam...</button>
        </div>
      </div>
    </div>
  );
};

export default About;
