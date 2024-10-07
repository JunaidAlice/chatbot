// import React from 'react
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Team from "./Team";
import Features from "./Features";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <div className=" bg-gray-950 relative" id="Home">
        <div className="bg-purple-600 absolute p-[14%] md:p-[8%] bg-opacity-15  rounded-b-full blur-lg left-[0%]"></div>
        <div className="bg-purple-600 absolute p-16 bg-opacity-15  rounded-b-full blur-lg  top-12 right-[10%]"></div>
        <div className="bg-purple-600 absolute p-12 bg-opacity-15  rounded-b-full blur-lg bottom-20 left-[3%]"></div>
        <div className="bg-purple-600 absolute p-[12%] bg-opacity-15  rounded-b-full blur-lg bottom-0 left-[44%]"></div>
        <div className="bg-purple-600 absolute bg-opacity-15  rounded-t-full rounded-bl-full blur-3xl bottom-32 right-[12%]"></div>
        <div className="bg-purple-600 absolute p-[32%] bg-opacity-15  rounded-b-full rounded-tr-full blur-3xl top-40 left-[15%]"></div>

        <Navbar />
        <div className="hero bg-transparent min-h-screen ">
          <div className=" text-center bg-transparent">
            <div className="max-w-[60%] mx-auto   ">
              <h1 className="text-3xl font-bold ">Unleash Your Creativity</h1>
              <p className="py-6 font-semibold">
                is a platform designed to inspire innovation and bring out the
                best of your imagination. Whether you’re an entrepreneur,
                artist, or thinker, this app empowers you to explore new ideas
                and turn them into actionable plans. With a variety of tools for
                brainstorming, collaboration, and idea sharing, it fosters a
                creative environment where anything is possible. The journey
                from concept to reality starts here, giving you the freedom to
                express your unique vision. Break free from limitations,
                collaborate with others, and see your creativity take flight.
                With this app, your ideas are the seeds of the future, waiting
                to be nurtured and grown.
              </p>
              <Link to="/login">
                <button className="btn bg-blue-400 text-black hover:bg-blue-500 relative">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="mt-4 w-[90%] mx-auto rounded-t-full  border  border-purple-700"></div>
          </div>
        </div>
        <Team />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default Home;
