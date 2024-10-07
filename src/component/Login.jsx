import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const inputValues = [
    {
      id: 1,
      placehoder: "Email",
      type: "Email",
    },
    {
      id: 2,
      placehoder: "Password",
      type: "Password",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  h-screen bg-slate-950">
      <div className=" md:px-10 py-12 px-3 md:py-12  border rounded-md backdrop-blur-lg space-y-4 relative">
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-20 left-5"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-0 left-44"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-32 right-2"></div>
        <h1 className="font-bold text-3xl  ">Login </h1>
        <div className="mx-auto ">
          {inputValues.map((inputValues) => (
            <div key={inputValues.id} className=" ">
              <input
                className=" mx-auto mt-2 px-8 py-2 rounded-md outline-none relative bg-slate-900"
                type={inputValues.type}
                placeholder={inputValues.placehoder}
              />
            </div>
          ))}
        </div>
        <div className=" flex justify-center ">
          {" "}
          <Link to="/Hero">
            {" "}
            <button className=" active:ring-1 active:ring-offset-gray-800 rounded-md hover:bg-slate-900 px-2 font-semibold text-xl py-1 mx-auto">
              login
            </button>
          </Link>
        </div>
        <h1>
          I don-t have account{" "}
          <span className=" ">
            <Link to="/newaccount" className="font-semibold text-blue-500">create new &#8594;</Link>
          </span>{" "}
        </h1>
      
    
      </div>  <div className=" mx-auto flex justify-center mb-2 mt-2 ">OR</div>
      <a href="#">  <button className="flex gap-1 items-center mx-auto  font-semibold"><span><FcGoogle />
        </span >Google</button></a>
      
    </div>
  );
};

export default Login;
