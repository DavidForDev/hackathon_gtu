"use client";

import {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

import gql from "graphql-tag";
import Apollo from "@/apollo/apollo";

const ChatContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const cookies = new Cookies();

  const token = cookies.get("token");
  const data = token ? (jwtDecode(token) as string) : "";

  return (
    <ChatContext.Provider
      value={{
        user: data,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
};
