import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
        <div className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Arama</Title>
            <input
              type="text"
              placeholder="  Search..."
              className="border w-full my-10 rounded-3xl"
            />
            <ul>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/pide-1.jpeg" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Kıymalı Pide</span>
                <span className="font-bold">100 TL</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/pide-1.jpeg" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Peynirli Pide</span>
                <span className="font-bold">80 TL</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/pide-1.jpeg" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Yumurtalı Pide</span>
                <span className="font-bold">80 TL</span>
              </li>
            </ul>
            <button
              className="absolute  top-4 right-4  transition-all btn-rounded"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel size={25} className="hover:text-primary transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
