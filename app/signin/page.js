'use client'
import React, { useState } from "react";
import signIn from "../../firebase/auth/signin";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password, remember);

    if (error) {
      console.log("user is not signed in");
      return console.log(error);
    }

    console.log(result);
    console.log("user is signed in");
    return router.push("/admin");
  };

  return (
    <div className="!h-0">
      <div className="flex justify-center items-center p-10">
        <div>
          <h1 className="mb-6 text-2xl font-bold">Sign In</h1>
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
            <div className="flex mt-3 items-center justify-between">
              <div className="space-x-2">
                <input type="checkbox" name="rememberMe" checked={remember} onChange={() => setRemember(!remember)}/>
                <label>Remember me</label>
              </div>
              <button type="submit" className=" bg-blue-500 py-1 px-3 rounded-lg ring-2 ring-gray-950">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
