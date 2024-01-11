import Title from "../../components/ui/Title";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src="/images/pide-1.jpeg" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Kıymalı Pide</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          100 TL
        </span>
        <p className="text-sm my-4 md:pr-24">
          İsteğe bağlı yumurta ve kaşar eklenir.
        </p>
        <div>
          <h4 className="text-xl font-bold">Boyutlar</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image src="/images/pide-3.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Tek
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src="/images/pide-3.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Bir Buçuk
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/pide-3.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Duble
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Yumurta</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Kaşar</span>
          </label>
        </div>
        <button className="btn-primary">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Index;