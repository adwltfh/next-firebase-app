"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import userSignOut from "../../firebase/auth/signout";

const Page = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleSignOut = async () => {
    const { result, error } = await userSignOut();
  
    if (error) {
      console.log("user is not signed out");
      return console.log(error);
    }
  
    console.log(result);
    console.log("user is signed out");
    return router.push("/");
  };

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <div className="w-full">
      <div className="p-6 flex justify-end bg-gray-400">
        <button className="hover:text-blue-100" onClick={handleSignOut}>Sign Out</button>
      </div>
      <h1>Only logged in users can view this page</h1>
    </div>
  );
};

export default Page;
