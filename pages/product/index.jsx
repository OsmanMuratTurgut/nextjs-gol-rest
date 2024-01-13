import { useState } from "react";
import Title from "../../components/ui/Title";
import Image from "next/image";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
  {
    id: 1,
    name: "Kaşar",
    price: 15,
  },
  {
    id: 2,
    name: "Yumurta",
    price: 5,
  },
];

const foodItems = [
  {
    id: 1,
    name: "Kıymalı Pide",
    price: 100,
    desc: "Kıymalı yumurtalı",
    extraOptions: [
      {
        id: 2,
        name: "Yumurta",
        price: 5,
      },
    ],
  },
];

const Index = () => {
  const [prices, setPrices] = useState([100, 150, 200]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();


  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
  };

  console.log(cart);
  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image
          src="/images/pide-1.jpeg"
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Kıymalı Pide</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          {price} TL
        </span>
        <p className="text-sm my-4 md:pr-24">
          İsteğe bağlı yumurta ve kaşar eklenir.
        </p>
        <div>
          <h4 className="text-xl font-bold">Boyutlar</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => handleSize(0)}
            >
              <Image src="/images/pide-3.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Tek
              </span>
            </div>
            <div
              className="relative w-12 h-12 cursor-pointer"
              onClick={() => handleSize(1)}
            >
              <Image src="/images/pide-3.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Bir Buçuk
              </span>
            </div>
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => handleSize(2)}
            >
              <Image src="/images/pide-3.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Duble
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
        {extraItems.map((item) => (
            <label className="flex items-center gap-x-1" key={item.id}>
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
                onChange={(e) => handleChange(e, item)}
              />
              <span className="text-sm font-semibold">{item.name}</span>
            </label>
          ))}
        </div>
         <button className="btn-primary" onClick={handleClick}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Index;