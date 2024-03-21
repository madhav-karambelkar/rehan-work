"use client";
import { SessionProvider as SessionWrapper } from "next-auth/react";
import React from "react";

const SessionProvider = ({ children }) => {
  return <SessionWrapper>{children}</SessionWrapper>;
};

export default SessionProvider;