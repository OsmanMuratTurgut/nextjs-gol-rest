import Image from "next/image";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p>
          Bölgenin en ekonomik en hijyenik üst düzey en kaliteli işletmesi.
          Yusuf Bey, Ali Bey mütevazı kişiliklerinin yanında güleryüzlü içten
          samimi gün görmüş yöneticiler. WC lavabolarını görünce ne kadar
          hijyenik temiz üst düzey bir işletme olduğu fikrini hemen
          hissettiriyor gidince siz de anlayacaksınız. Ciğer efsane idi. Fiyatı
          90 TL. Doyurucu ve leziz. Yanında salatası ezmesi dahil. Yolları açık
          olsun... Otopark: Oldukça geniş bir otopark. Yemek yerken aracınızı
          görebiliyorsunuz. Çocuklara uygunluk: Bebekler çocuklar için güvenli
          özel sandeyeleri vardı
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">Moana Michell</span>
          <span className="text-[15px]">magna aliqua</span>
        </div>
      </div>
      <div
        className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 
      flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 "
      >
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};
export default CustomerItem;
