import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem =
  | {
      icon?: ReactNode;
      key: string | undefined;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TUserPath = {
  icon?: ReactNode;
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
