import React, { useEffect } from "react";
import PackageComponent from "src/components/package";

import PaymentComponent from "src/components/payment";
import { useSelector } from "react-redux";
import { isCreatePaymentSelector } from "src/redux/selectors";
import ProductComponent from "src/components/product";
import { isCartItemSelector } from "src/redux/selectors/product/product.selector";
import CartDetailComponent from "src/components/cart";
const ProductPage = () => {
  return (
    <>
      <div className="row ">
        <ProductComponent />
      </div>
    </>
  );
};
export default ProductPage;
