import { createContext, useEffect, useState } from "react";

import { FieldValues } from "react-hook-form";

import {
  InfosProviderSchema,
  InfosResponseSchema,
} from "../interfaces/infos.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";
import api from "../services/api";

export const SendInfosContext = createContext<InfosProviderSchema>(
  {} as InfosProviderSchema
);

export const SendInfosProvider = ({ children }: Ichildren) => {
  const [data, setData] = useState<FieldValues>({} as FieldValues);
  const [resData, setResData] = useState<InfosResponseSchema>(
    {} as InfosResponseSchema
  );

  useEffect(() => {
    Object.keys(data).length > 0 &&
      api
        .post(`/`, data)
        .then((res) => {
          setResData(res.data);
        })
        .catch((err) => console.error(err));
  }, [data]);

  return (
    <SendInfosContext.Provider
      value={{
        setData,
        resData,
        data,
      }}
    >
      {children}
    </SendInfosContext.Provider>
  );
};
