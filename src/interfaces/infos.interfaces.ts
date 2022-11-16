import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

export interface InfosSchema {
  amount: number;
  installments: number;
  mdr: number;
}

export interface InfosResponseSchema {
  "1": number;
  "15": number;
  "30": number;
  "90": number;
}

export interface InfosProviderSchema {
  setData: Dispatch<SetStateAction<FieldValues>>;
  resData: InfosResponseSchema;
  data: FieldValues;
  loading: boolean;
  setloading: Dispatch<SetStateAction<boolean>>;
}
