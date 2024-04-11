import { GrStatusGoodSmall } from "react-icons/gr";
import { RiDashboardLine } from "react-icons/ri";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import BuyerDashboard from "../pages/buyer/BuyerDashboard";
import PolishRequest from "../pages/buyer/PolishRequest";
import Product from "../pages/buyer/Product";
import VerifyProduct from "../pages/buyer/VerifyProduct";

export const buyerPaths = [
  {
    icon: <RiDashboardLine />,
    name: "Dashboard",
    path: "dashboard",
    element: <BuyerDashboard />,
  },
  {
    icon: <GrStatusGoodSmall />,
    name: "Products",
    path: "products",
    element: <Product />,
  },
  {
    path: "verify/:productID",
    element: <VerifyProduct />,
  },
  {
    icon: <VscGitPullRequestNewChanges />,
    name: "Polish Request",
    path: "create-polish-request",
    element: <PolishRequest />,
  },
];
