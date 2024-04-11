import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { logout, setCollapsed } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Heading = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.auth.collapsed);

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        padding: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => dispatch(setCollapsed(!collapsed))}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <div style={{ marginRight: "15px" }}>
        <Button danger onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </div>
    </Header>
  );
};
export default Heading;
