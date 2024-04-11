import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";

export type TError = {
  error: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  success: boolean;
  message: string;
  meta?: TMeta;
  data?: T;
  error?: TError;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
