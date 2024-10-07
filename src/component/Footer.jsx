import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";

const Footer = () => {
  return (
    <div className=" text-white">
  
      <div className=" w-[90%] mx-auto rounded-t-full  border  border-purple-700"></div>
      <footer className="footer  text-neutral-content items-center p-4 bg-gray-950  ">
        {" "}
        <div className="flex items-center w-full justify-between ">
        <div className="w-32 ">
          <div className="flex  items-center hover:cursor-pointer">
            <img
              src={logo}
              className="w-12 rounded-full ring-1 ring-purple-600  relative"
              alt="logo"
            />
            <h1 className=" font-bold ml-2 hover:underline relative text-white">Final Year</h1>
          </div>
        </div>
        <div className=" relative ">
          <div className="  flex md:flex-row flex-col   ">
            <ul className="flex   justify-center items-center gap-3  px-1 mx-auto text-white">
              <li>
                <Link to="/" className="hover:font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <a href="#team" className="hover:font-semibold">
                  Team
                </a>
              </li>
              <li>
                <a href="#features" className="hover:font-semibold">
                  Features
                </a>
              </li>  <li>
                <a href="#Pricing" className="hover:font-semibold">
                 Pricing
                </a>
              </li>
            </ul>
          </div>
        </div></div>
       
        <nav className=" w-full justify-center md:justify-end">
          <div className="flex gap-4"> <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-purple-950 "
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-purple-950"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-purple-950 "
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a></div>
         
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
