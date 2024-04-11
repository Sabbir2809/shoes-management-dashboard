import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { logout, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://shoes-inventory-eight.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

// custom
const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (
  args,
  api,
  extraOptions
): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403 || result?.error?.status === 400) {
    return toast.error("Something went Wrong");
  }

  if (result?.error?.status === 401) {
    // send refresh token
    const res = await fetch("https://shoes-inventory-eight.vercel.app/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    // new token
    const { data } = await res.json();

    if (data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      // set user
      api.dispatch(
        setUser({
          user,
          token: data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["product", "polish", "cart"],
  endpoints: () => ({}),
});
