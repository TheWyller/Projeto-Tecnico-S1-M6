import React from "react";
import { Ichildren } from "../interfaces/react.interfaces";
import { SendInfosProvider } from "./SendInfosContext";

const Providers = ({ children }: Ichildren) => {
  return <SendInfosProvider>{children}</SendInfosProvider>;
};

export default Providers;
