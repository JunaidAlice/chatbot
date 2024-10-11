import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { account } from "../appwrite/AppwriteConfig";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(user.email, user.password);
      navigate("/Hero");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className=" md:px-10 py-12 px-3 md:py-12  border rounded-md backdrop-blur-lg space-y-4 relative shadow-md ">
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-20 left-5"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-0 left-44"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-32 right-2"></div>
        <h1 className="font-bold text-3xl text-black  ">Login </h1>

        <form action="#" method="POST" className="mx-auto ">
        <div>
            <label htmlFor="email">Email adress</label>
            <div>
              <input type="email" name="email" id="email" autoComplete="email" required className="py-1 pl-3 pr-9 rounded-md text-black bg-zinc-200 relative" onChange={(e)=>{
                setUser({
                  ...user,
                  email: e.target.value
                })
              }}/>
            </div>
          </div><div>
            <label htmlFor="email">Password</label>
            <div>
              <input type="password" name="password" id="password" autoComplete="current-password" required className="py-1 pl-3 pr-9 rounded-md text-black bg-zinc-200 relative" onChange={(e)=>{
                setUser({
                  ...user,
                  password: e.target.value
                })
              }}/>
            </div>
          </div>
        </form>

        <div className=" flex justify-center ">
          {" "}
         
            {" "}
            <button className=" active:ring-1   border active:shadow-sm rounded-md py-1 px-2 shadow-xl  text-black  font-semibold mx-auto"
            onClick={loginUser}>
              login
            </button>
        
        </div>
        <h1>
          I don't have account{" "}
          <span className=" ">
            <Link to="/signUp" className="font-semibold text-blue-500">
              create new &#8594;
            </Link>
          </span>{" "}
        </h1>
      </div>{" "}
      <div className=" mx-auto flex justify-center mb-2 mt-2 text-black ">OR</div>
      <a href="#">
        {" "}
        <button className="flex gap-1 items-center mx-auto  text-black border active:shadow-sm rounded-md py-1 px-2 shadow-xl  font-semibold">
          <span>
            <FcGoogle />
          </span>
          Google
        </button>
      </a>
    </div>
  );
};

export default Login;
