// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed z-50 shadow-2xl backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-purple-600 bg-opacity-5 rounded-box font-semibold z-[1] mt-10 w-52 p-2 ">
              <li className="">
                <Link to="/" className="hover:font-semibold">Home</Link>
              </li>
              <li className="">
                <a href="#team" className="hover:font-semibold">Team</a>
              </li>{" "}
              <li className="">
                <a href="#features" className="hover:font-semibold">Features</a>
              </li> <li className="">
                <a href="#pricing" className="hover:font-semibold">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="font-bold ml-2 hover:underline relative flex items-center justify-center hover:cursor-pointer  gap-2 " id="Home">
            <img src={logo} alt="" className="w-12 rounded-full ring-1 ring-purple-600  relative " />
           <h1 className="text-white font-semibold">Final Year</h1> 
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="hover:font-semibold">Home</Link>
            </li>
            <li>
              <a href="#team" className="hover:font-semibold">Team</a>
            </li>
            <li className="font-semibold">
              <a href="#features" className="hover:font-semibold">Features</a>
            </li>
            <li className="font-semibold">
                <a href="#pricing" className="hover:font-semibold">Pricing</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className=" relative">
            <button className="btn bg-blue-400 text-black hover:bg-blue-500">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
