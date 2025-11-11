import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";


const Register = () => {

    const [userName , setuserName] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setconfrimPassword] = useState("");
    const navigate = useNavigate();

    const check = async () => {
        if(password!=confirmPassword) {
            alert("Enter Same Password In Both");
        }
        try {
        
            const response = await axiosInstance.post("/register",{
                userName : userName,
                password : password
            })
            navigate("/login/user");
            console.log(response.data);
            
        } catch (error) {

            if(error.response && error.response?.data?.message){
                alert(error.response.data.message)
            }

            else{
                console.log(error);
            }
        }
    }


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-top-br from-blue-100 via-zinc-100 to-blue-200">
      <div className="h-auto w-[38%] bg-white shadow-lg rounded-2xl p-10 flex flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold text-center text-zinc-700 mb-3">
          Create Account
        </h1>

        {/* Username field */}
        <div className="w-full flex flex-col">
          <label className="text-lg font-medium mb-2 text-zinc-700">
            Username
          </label>
          <input value={userName} onChange={e => setuserName(e.target.value)}
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
          <input   value={password} onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="border-2 border-zinc-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Confirm Password field */}
        <div className="w-full flex flex-col">
          <label className="text-lg font-medium mb-2 text-zinc-700">
            Confirm Password
          </label>
          <input  value={confirmPassword} onChange={e => setconfrimPassword(e.target.value)}
            type="password"
            placeholder="Re-enter your password"
            className="border-2 border-zinc-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Register button */} 
        <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all" onClick={()=>{check()}}>
          Register
        </button>

        {/* Optional link */}
        <p className="text-center text-sm text-zinc-500 mt-2">
          Already have an account?{" "}
          <span onClick={()=>navigate("/login/user")}  className="text-blue-600 hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
