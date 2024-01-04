import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
  return (
    <>
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto flex justify-between items-center h-full text-white">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="flex gap-x-2">
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Ana Sayfa</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Menü</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Hakkımızda</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Rezarvasyon</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={()=> setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#">
            <button className="btn-primary">Online Sipariş</button>
          </a>
        </div>
      </div>
     
    </div>

    {isSearchModal &&  (
    <Search setIsSearchModal = {setIsSearchModal}/>
    )}
   
    </>
  );
};

export default Header;
