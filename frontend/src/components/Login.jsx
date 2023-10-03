/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import loginImg from "../assets/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/api/user/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          window.location.href = "/dashboard";
        });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.errors);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form onSubmit={Auth} className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">Login</h2>
          <p className="text-red-500 mt-4">{msg}</p>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" />
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">Login</button>
          <div className="mt-3 text-center">
            <p>
              Don`t Have Account?{" "}
              <span>
                {" "}
                <a className="text-blue-500 hover:text-white" href="/register">
                  Regiater
                </a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
