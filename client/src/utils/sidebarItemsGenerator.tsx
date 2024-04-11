import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        icon: item.icon,
        key: item.name,
        label: (
          <NavLink
            to={`/${role}/${item.path}`}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : "",
              };
            }}>
            {item.name}
          </NavLink>
        ),
      });
    }
    if (item.children) {
      acc.push({
        icon: item.icon,
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              icon: item.icon,
              key: child.name,
              label: (
                <NavLink
                  to={`/${role}/${child.path}`}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "white" : "",
                    };
                  }}>
                  {child.name}
                </NavLink>
              ),
            };
          }
        }),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
