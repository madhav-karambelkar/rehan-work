"use client";
import { useSession } from "next-auth/react";
import SignOutButton from "../component/SignOutButton";
import { useEffect } from "react";

export default function AboutUs({ data }) {
  const session = useSession();
  return (
    <>
      <h2 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
        About US
        <span>{session.data?.user?.firstName}</span>
      </h2>
      <SignOutButton />
    </>
  );
}

/**
 * fetch("https://dummyjson.com/api/data?page=1", {
    method: "GET",
    headers: {
    //   Authorization: "Bearer your_token_here", // Replace 'your_token_here' with your actual token
    },
  })
 */
