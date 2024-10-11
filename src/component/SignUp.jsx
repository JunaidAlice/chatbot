import { Link, UNSAFE_useRouteId, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { account } from "../appwrite/AppwriteConfig";
import { v4 as uuidv4 } from "uuid";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const signupUser = async (e) => {
    e.preventDefault();
    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );
    promise.then(
      function (response) {
        console.log(response);
        navigate("/Login"); //sucess
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center  h-screen bg-white">
      <div className="  md:px-10 py-12 px-3 md:py-12  border rounded-md backdrop-blur-lg space-y-4 relative shadow-md">
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-20 left-5"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-0 left-44"></div>
        <div className="bg-purple-600 absolute p-7 bg-opacity-15  rounded-b-full blur-lg bottom-32 right-2"></div>
        <h1 className="font-bold text-3xl text-black  ">Sign Up</h1>
        <form action="#" method="POST">
          <div>
            <label htmlFor="name">Name</label>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className=" outline-none py-1 px-4  rounded-md bg-zinc-200 text-black"
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
              />
            </div>
          </div>{" "}
          <div>
            <label htmlFor="name">Email adress</label>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="outline-none py-1 px-4 rounded-md bg-zinc-200 text-black"
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
            </div>
          </div>{" "}
          <div>
            <label htmlFor="name">password</label>
            <div className="">
              <input
                type="password"
                id="password"
                name="password"
                required
                autoComplete="current-password"
                className="outline-none py-1 px-4 rounded-md bg-zinc-200 text-black"
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div>
            <button type="submit" onClick={signupUser} className=" active:ring-1   rounded-md   font-semibold text-black border active:shadow-sm  py-1 px-2 shadow-xl  mx-auto flex items-center justify-center mt-4">
              Sign up
            </button>
          </div>
        </form>
      </div>

      <h1 className="mx-auto mt-2">OR</h1>
      <a href="#">
        {" "}
        <button className="flex gap-1  text-black border active:shadow-sm rounded-md py-1 px-2 shadow-xl items-center mx-auto mt-2  font-semibold">
          <span>
            <FcGoogle />
          </span>
          Google
        </button>
      </a>
    </div>
  );
};

export default SignUp;
