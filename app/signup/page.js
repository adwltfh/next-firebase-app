"use client";
import React, { useState } from "react";
import signUp from "../../firebase/auth/signup";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/admin");
  };

  return (
    <div className="!h-0">
      <div className="flex justify-center items-center p-10">
        <div>
          <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>
          <form onSubmit={handleForm} className="">
            <div className="py-2">
              <label htmlFor="email">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                  className="p-2 mt-2 rounded-md w-full text-black"
                />
              </label>
            </div>
            <div className="py-2">
              <label htmlFor="password">
                <p>Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="p-2 mt-2 rounded-md w-full text-black"
                />
              </label>
            </div>
            <button
              type="submit"
              className="flex mt-3 bg-gray-500 p-2 rounded-lg ring-2 ring-gray-950"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
