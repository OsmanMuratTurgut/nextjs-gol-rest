import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Search from "../ui/Search";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const cart = useSelector((state) => state.cart);

  const router = useRouter();
  return (
    <>
      <div
        className={`h-[5.5rem] z-50 relative ${
          router.asPath === "/" ? "bg-transparent" : "bg-secondary"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center h-full text-white">
          <div>
            <Logo />
          </div>
          <div
            className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
              isMenuModal === true && "!grid place-content-center"
            }`}
          >
            <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
              <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
                <Link href="/">Ana Sayfa</Link>
              </li>
              <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
                <Link href="/menu">Menü</Link>
              </li>
              <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
                <Link href="/about">Hakkımızda</Link>
              </li>
              <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
                <Link href="/reservation">İletişim</Link>
              </li>
            </ul>
            {isMenuModal && (
              <button
                className="absolute  top-4 right-4 z-50"
                onClick={() => setIsMenuModal(false)}
              >
                <GiCancel
                  size={25}
                  className="hover:text-primary transition-all"
                />
              </button>
            )}
          </div>
          <div className="flex gap-x-4 items-center">
            <Link href="/auth/login">
              <span>
                <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
              </span>
            </Link>
            <Link href="/cart">
              <span className="relative">
                <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
                <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                  {cart.products.length === 0 ? "0" : cart.products.length}
                </span>
              </span>
            </Link>
            <button onClick={() => setIsSearchModal(true)}>
              <FaSearch className="hover:text-primary transition-all cursor-pointer" />
            </button>
            <a href="#" className="md:inline-block hidden">
              <button className="btn-primary">Online Sipariş</button>
            </a>
            <button
              className="sm:hidden inline-block"
              onClick={() => setIsMenuModal(true)}
            >
              <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
            </button>
          </div>
        </div>
      </div>

      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </>
  );
};

export default Header;
