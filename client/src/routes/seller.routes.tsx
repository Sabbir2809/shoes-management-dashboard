import { GiCrystalShine, GiRunningShoe } from "react-icons/gi";
import { RiDashboardLine } from "react-icons/ri";
import PolishService from "../pages/seller/PolishService";
import SellerDashboard from "../pages/seller/SellerDashboard";
import SalesHistory from "../pages/seller/sales/SalesHistory";
import AddShoes from "../pages/seller/shoes/AddShoes";
import CreateVariant from "../pages/seller/shoes/CreateVariant";
import ProductTable from "../pages/seller/shoes/ProductTable";

export const sellerPaths = [
  {
    icon: <RiDashboardLine />,
    name: "Dashboard",
    path: "dashboard",
    element: <SellerDashboard />,
  },
  {
    icon: <GiRunningShoe />,
    name: "Shoes Management",
    children: [
      {
        name: "Add Shoes",
        path: "add-shoes",
        element: <AddShoes />,
      },
      {
        name: "Products",
        path: "products",
        element: <ProductTable />,
      },
      {
        name: "Sales History",
        path: "sales-history",
        element: <SalesHistory />,
      },
      {
        path: "create-variant",
        element: <CreateVariant />,
      },
    ],
  },
  {
    icon: <GiCrystalShine />,
    name: "Polish Service",
    path: "polish-service",
    element: <PolishService />,
  },
];
