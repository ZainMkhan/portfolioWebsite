import logo from "./../../assets/portfolioLogo.png";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        data-aos="slide-down"
        className=" bg-white shadow-2xl flex w-11/12 rounded-xl justify-between items-center delay-100 z-50 fixed px-10 top-2 nav:m-0 select-none hover:drop-shadow-md">
        {/* Logo Container */}
        <div>
          <Link to="home" smooth className="hover:cursor-pointer">
            <img src={logo} alt="Logo" className="w-[80px] nav:w-[50px]" />
          </Link>
        </div>

        {/* Menu Container */}
        <div
          className="absolute flex-col w-5 h-5 justify-between right-10 hidden nav:flex"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}>
          <span className="h-1 w-full bg-black rounded-md"></span>
          <span className="h-1 w-full bg-black rounded-md"></span>
          <span className="h-1 w-full bg-black rounded-md"></span>
        </div>

        {/* Nav Items */}
        <div>
          <ul
            className={`flex  gap-10 nav:justify-center nav:flex-col nav:absolute nav:bg-white nav:w-full nav:min-h-screen nav:top-0 nav:m-0 nav:p-0 nav:left-0 items-center nav:gap-20 nav:opacity-110 transition-all ease-in-out delay-150 ${
              menuOpen ? "nav:flex" : "nav:hidden"
            }`}>
            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              smooth
              to="about"
              className=" text-xl  nav:text-3xl relative after:bg-red-500 after:absolute after:h-1 after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer leading-8 nav:leading-10 ">
              About me
            </Link>

            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              smooth
              to="project"
              className=" text-xl nav:text-3xl relative after:bg-red-500 after:absolute after:h-1  after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer leading-8 nav:leading-10">
              Projects
            </Link>

            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              smooth
              to="contact"
              className=" text-xl nav:text-3xl relative after:bg-red-500 after:absolute after:h-1  after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer leading-8 nav:leading-10">
              Contact me
            </Link>

            <li
              className="hidden nav:flex nav:absolute nav:top-[5%] nav:text-5xl nav:right-[15%] font-md text-red-600"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}>
              X
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
