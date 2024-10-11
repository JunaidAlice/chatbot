// import React from 'react
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Team from "./Team";
import Features from "./Features";

const Home = () => {
  return (
    <>
      <div className=" relative">
   
        <div className="bg-purple-600 absolute p-16 bg-opacity-15  rounded-b-full blur-2xl  top-12 right-[%]"></div>


        <div className="bg-purple-600 absolute p-[35%] bg-opacity-15  rounded-b-full rounded-tr-full blur-3xl top-40 left-[15%]"></div>

        <Navbar />
        <div className="hero bg-transparent min-h-screen text-black " id="home">
          <div className=" text-center bg-transparent">
            <div className="max-w-[60%] mx-auto   ">
              <h1 className="text-3xl font-bold ">Unleash Your Creativity</h1>
              <p className="py-6 font-semibold"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem consequatur corrupti.</h1></p>
              <Link to="/login">
                <button className="btn bg-blue-500 text-black hover:bg-blue-600 relative active:shadow-xl">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="mt-4 w-[90%] mx-auto rounded-t-full  border  border-purple-700"></div>
          </div>
        </div>

        <Features />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default Home;
