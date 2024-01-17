import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import Title from "./Title";

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src="/images/pide-2.jpeg"
          alt=""
          layout="fill"
          className="hover:scale-150 transition-all"
          objectFit="cover"
          priority
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Pide Kampanyası</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">İndirim</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Sepete Ekle<MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;