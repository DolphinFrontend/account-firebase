import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();


 const handleLogOut  = async (e) => {
   try{
    await logOut()
    navigate("/")
    console.log("You are logOut")
   } catch(e)  {
    console.log(e.message)
   }
  }


  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email: {user && user.email} </p>
      <button
        onClick={handleLogOut}
        className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-100 p-3 my-5 text-white rounded-full"
      >
        LogOut 
        
      </button>
    </div>
    
  );
};

export default Account;
