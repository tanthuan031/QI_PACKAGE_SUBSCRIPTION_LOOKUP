import React, { useEffect } from "react";
import PackageComponent from "src/components/package";

import PaymentComponent from "src/components/payment";
import { useSelector } from "react-redux";
import { isCreatePaymentSelector } from "src/redux/selectors";
import ProductComponent from "src/components/product";
import { isCartItemSelector } from "src/redux/selectors/product/product.selector";
import CartDetailComponent from "src/components/cart";
const CartPage = () => {
  const isCheckCartDetail = useSelector(isCartItemSelector);
  return (
    <>
      <div className="row " id="cart-sl">
        <CartDetailComponent />
      </div>
    </>
  );
};
export default CartPage;
