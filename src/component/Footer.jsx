import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";

const Footer = () => {
  return (
    <div className=" text-black">
  
      <div className=" w-[90%] mx-auto rounded-t-full  border  border-purple-700"></div>
      <footer className="footer  text-neutral-content items-center p-4  ">
        {" "}
        <div className="flex items-center w-full justify-between ">
        <div className="w-32 ">
          <div className="flex  items-center hover:cursor-pointer">
            <img
              src={logo}
              className="w-12 rounded-full ring-1 ring-purple-600  relative"
              alt="logo"
            />
            <h1 className=" font-bold ml-2 hover:underline relative text-black">Final Year</h1>
          </div>
        </div>
        <div className=" relative ">
          <div className="  flex md:flex-row flex-col   ">
            <ul className="flex   justify-center items-center gap-3  px-1 mx-auto text-white">
              <li>
                <Link to="/" className="hover:font-semibold text-black ">
                  Home
                </Link>
              </li>
              <li>
                <a href="#team" className="hover:font-semibold text-black  ">
                  Team
                </a>
              </li>
              <li>
                <a href="#features" className="hover:font-semibold text-black ">
                  Features
                </a>
              </li>  
            </ul>
          </div>
        </div></div>
       
        <nav className=" w-full justify-center md:justify-end">
         
        </nav>
      </footer>
      <div className="mx-auto  ">
        <div className="w-[30%]  mx-auto p-4">
         
        </div> <div className=" w-full   ">
            <div className=" relative w-[90%] mx-auto pb-4">
              <h1 className="flex justify-center font-medium hover:cursor-pointer ">
                Horixon Labs (pvt) Ltd.
              </h1>
              <p className="text-center" >Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
