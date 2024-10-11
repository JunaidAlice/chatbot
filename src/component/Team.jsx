import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import img2 from '../assets/me.'

const Team = () => {
  const Cards = [
    {
      img: "/",
      name: "muzammil",
      link: "/",
      Para: " is simply dummy text thayof thummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      // img: img2,
      name: "Junaid",
      link: "",
      Para: " is simply dummy text of tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "/",
      name: "Naeem",
      link: "/",
      Para: " is simply dummy text  dsof the pdummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div id="team">
      <div className=" w-[90%] mx-auto rounded-t-full  border  border-purple-700 mb-4"></div>
      
 

      <div className="  py-16 text-black flex items-center">
        
        <div className="flex md:flex-row flex-col  justify-evenly items-center relative">
          {Cards.map((Cards) => (
            <div
              key={Cards.name}
              className="border p-3 w-[70%] md:w-[20%] rounded-xl hover:border-purple-900 md:mt-0 mt-4 mb-4 text-center hover:cursor-pointer"
            >
              <img src={Cards.img} className="w-2 border" alt="#" />
              <h1 className="text-xl font-bold">{Cards.name}</h1>
              <p>{Cards.Para}</p>
              <Link to={Cards.link}></Link>
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default Team;
