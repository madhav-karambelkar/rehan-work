"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function SingInCard() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const handleClick = async () => {
    const dummyData = { username: "kminchelle", password: "0lelplR" };
    await signIn("credentials",
      {...dummyData ,callbackUrl: "/about-us", redirect: true }
    );
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <span className="card-title inline-block text-center">Sign In</span>
        <div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                type="text"
                placeholder="Please Enter User Name"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Please Enter Password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setPassWord(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleClick}>
            Sign
          </button>
        </div>
      </div>
    </div>
  );
}
