import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Newaccount = () => {
  const inputValues = [
    {
        id: 1,
        placehoder: "Username",
        type: "Text",
      }, {
        id: 2,
        placehoder: "Email",
        type: "Email",
      },
    {
      id: 3,
      placehoder: "Password",
      type: "Password",
    },
  ];  return (
    <div className="flex flex-col items-center justify-center  h-screen bg-slate-950">
      <div className="  md:px-10 py-12 px-3 md:py-12 border rounded-md   backdrop-blur-lg space-y-6 relative">
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-20 left-5"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-0 left-44"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-32 right-2"></div>
        <h1 className="font-bold text-3xl  ">Sign Up</h1>
        <div className="mx-auto ">
          {inputValues.map((inputValues) => (
            <div key={inputValues.id} className=" ">
              <input
                className=" mx-auto mt-6 pl-2 pr-8 py-2 rounded-md outline-none relative ml-0 bg-slate-900 "
                type={inputValues.type}
                placeholder={inputValues.placehoder}
              />
            </div>
          ))}
        </div>
        <div className=" flex justify-center ">
          {" "}
          <Link to="#">
            {" "}
            <button className=" active:ring-1 active:ring-offset-gray-800 rounded-md hover:bg-slate-900 px-2 font-semibold text-xl py-1 mx-auto">
           Submit
            </button>
          </Link>
        </div>
        
      </div>
     
     <h1 className="mx-auto mt-2">OR</h1>
      <a href="#">  <button className="flex gap-1 items-center mx-auto mt-2  font-semibold"><span><FcGoogle />
        </span >Google</button></a>
      
    
     
    </div>
  );
};

export default Newaccount;
