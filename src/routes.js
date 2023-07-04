import CartPage from "./views/pages/cart";
import PackagePage from "./views/pages/package";
import ProductPage from "./views/pages/product";
import TransactionStatusPage from "./views/pages/transaction-status/TransactionStatusPage";

const routes = [
  { path: "/", exact: true, name: "Tra cước", element: PackagePage },
  { path: "/product", exact: true, name: "Gói cước", element: ProductPage },
  { path: "/cart", exact: true, name: "Giỏ hàng", element: CartPage },
  {
    path: "/transaction-status",
    exact: true,
    name: "Giỏ hàng",
    element: TransactionStatusPage,
  },
];

export default routes;
