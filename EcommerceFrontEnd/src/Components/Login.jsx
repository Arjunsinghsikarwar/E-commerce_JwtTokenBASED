import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "./axiosInstance";

const Login = () => {
    const navigate = useNavigate();
    const [userName , setuserName] = useState("");
    const [password , setPassword] = useState("");


    const check = async() => {
        try {

            if(!userName || !password) {
                alert("Please Enter Both the Field");
                return ;
            }
        
            const response = await axiosInstance.post("/login/user",{
                userName : userName,
                password : password
            })

            if(response.data.token){
                localStorage.setItem("jwtToken",response.data.token);
                alert("Login Suncessfully");
                navigate("/");
            }
            else {
                alert("SomeThing Went Wrong");
            }
     
        } catch (error) {
            if(error.response.data?.message){
                alert(error.response.data.message)
                navigate("/register");
            }

            else{
                console.log("Invalid UserName or Passowrd");
            }
        }

    }



    
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-top-br from-blue-100 via-zinc-100 to-blue-200">
      <div className="h-[45%] w-[35%] bg-white shadow-lg rounded-2xl p-10 flex flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold text-center text-zinc-700 mb-3">
          Login
        </h1>

        {/* Username field */}
        <div className="w-full flex flex-col">
          <label className="text-lg font-medium mb-2 text-zinc-700">
            Username
          </label>
          <input value={userName} onChange={e=>setuserName(e.target.value)}
            type="text"
            placeholder="Enter your username"
            className="border-2 border-zinc-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Password field */}
        <div className="w-full flex flex-col">
          <label className="text-lg font-medium mb-2 text-zinc-700">
            Password
          </label>
          <input value={password} onChange={e=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="border-2 border-zinc-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Login button */}
        <button onClick={check} className="mt-4 bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
          Login
        </button>

        {/* Optional link */}
        <p className="text-center text-sm text-zinc-500 mt-2">
          Don’t have an account?{" "}
          <span onClick={()=>navigate("/register")} className="text-blue-600 hover:underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
