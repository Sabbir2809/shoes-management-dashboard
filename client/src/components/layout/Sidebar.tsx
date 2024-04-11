/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Layout, Menu, Typography } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TUser, selectCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { buyerPaths } from "../../routes/buyer.routes";
import { sellerPaths } from "../../routes/seller.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { verifyToken } from "../../utils/verifyToken";
const { Sider } = Layout;

const userRole = {
  BUYER: "buyer",
  SELLER: "seller",
};

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState<ItemType<MenuItemType>[]>([]);
  const token = useAppSelector(selectCurrentToken);
  const collapsed = useAppSelector((state) => state.auth.collapsed);

  useEffect(() => {
    let user;
    if (token) {
      user = verifyToken(token);
      let generatedSidebarItems: ItemType<MenuItemType>[] = [];

      switch ((user as TUser).role) {
        case userRole.SELLER:
          //@ts-ignore
          generatedSidebarItems = sidebarItemsGenerator(sellerPaths, userRole.SELLER);
          break;
        case userRole.BUYER:
          //@ts-ignore
          generatedSidebarItems = sidebarItemsGenerator(buyerPaths, userRole.BUYER);
          break;
        default:
          break;
      }
      setSidebarItems(generatedSidebarItems);
    }
  }, [token]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4.5rem",
        }}>
        <Typography.Title
          style={{
            textAlign: "center",
          }}
          level={collapsed ? 5 : 3}
          color="white">
          <Link to="/">Shoes Inventory</Link>
        </Typography.Title>
      </div>
      {/* Menu Items */}
      <Menu
        theme="dark"
        mode="inline"
        items={sidebarItems}
        style={{
          minHeight: "100vh",
          position: "sticky",
          top: 0,
        }}
      />
    </Sider>
  );
};
export default Sidebar;
