import CartPage from "./views/pages/cart";
import PackagePage from "./views/pages/package";
import ProductPage from "./views/pages/product";

const routes = [
  { path: "/", exact: true, name: "Tra cước", element: PackagePage },
  { path: "/product", exact: true, name: "Gói cước", element: ProductPage },
  { path: "/cart", exact: true, name: "Giỏ hàng", element: CartPage },
];

export default routes;
