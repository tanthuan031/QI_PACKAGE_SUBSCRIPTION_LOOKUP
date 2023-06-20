import { CButton } from "@coreui/react";
import { useState } from "react";
import ImageBackgroundLogo from "../../assets/img/logo_qi.png";
import "./style.css";
import {
  dataFamily as importedDataFamily,
  dataSpeed as importedDataSpeed,
  dataCompany as importedDataCompany,
  dataSpecial as importedDataSpecial,
} from "src/assets/data/dataProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountCartItem } from "src/redux/reducer/product/product.reducer";
import { countCartItemSelector } from "src/redux/selectors/product/product.selector";
const ProductComponent = (props) => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const dataFamily = importedDataFamily;
  const dataSpeed = importedDataSpeed;
  const dataCompany = importedDataCompany;
  const dataSpecial = importedDataSpecial;
  const [dataCart, setDataCart] = useState([]);
  const [checkAddCart, setCheckAddCart] = useState(false);
  var countAddCart = 0;
  const countCartAdd = useSelector(countCartItemSelector);
  const dispatch = useDispatch();

  const handleAddCart = (data) => {
    countAddCart++;
    const existingCartData = JSON.parse(localStorage.getItem("dataCart")) || [];
    let exitsCountCart = JSON.parse(localStorage.getItem("countCart")) || 0;
    if (exitsCountCart > 0) {
      localStorage.setItem("countCart", JSON.stringify(exitsCountCart + 1));
      dispatch(setCountCartItem(exitsCountCart + 1));
    } else {
      localStorage.setItem("countCart", 1);
      dispatch(setCountCartItem(1));
    }
    const existingProduct = existingCartData.find(
      (product) => product.group_id === data.group_id && product.id === data.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const newProduct = {
        ...data,
        quantity: 1,
      };
      existingCartData.push(newProduct);
    }
    localStorage.setItem("dataCart", JSON.stringify(existingCartData));
    setDataCart(existingCartData);
  };
  useEffect(() => {
    const existingCartCountData =
      JSON.parse(localStorage.getItem("countCart")) || 0;
    dispatch(setCountCartItem(existingCartCountData));

    const existingCartData = JSON.parse(localStorage.getItem("dataCart")) || [];
    setDataCart(existingCartData);
  }, [dispatch]);
  const isItemInCart = (item) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong dataCart hay không
    return dataCart.find(
      (product) => product.group_id === item.group_id && product.id === item.id
    );
  };
  return (
    <div className="container-fluid">
      <div className="container mt-5 mb-5">
        <div className="row mt-5">
          <div className="header-product firo-title">
            <h6 className="text-center text-warning">
              {" "}
              Gói cước cáp quang FTTH
            </h6>
            <h2 className="text-center">CHO GIA ĐÌNH - TRANG BỊ MESH</h2>
          </div>
          <div className="body-product">
            <div className="row">
              {dataFamily.map((item, index) => {
                return (
                  <div className="col-xl-3 col-sm-6 col-12 mt-3" key={index}>
                    <div className="card-product">
                      <div className="card-product-header">
                        <h4 className="text-center">{item.name_package}</h4>
                      </div>

                      <div className="card-product-body">
                        <h3 className="text-center mt-4 text-bold">
                          {VND.format(item.price_package)}
                        </h3>
                        <h6 className="text-center">Tháng</h6>
                        <div className="card-product-body-item mt-3 text-center">
                          <p>Tốc độ: {item.speed}Mbps</p>
                          <p>
                            Cổng ra quốc tế: {item.international_gateway}Kb/s
                          </p>
                          <p>1 Thiết bị Mesh: {item.mesh}đ</p>
                          <p>2 Thiết bị Mesh: {item.mesh_1}đ</p>
                        </div>
                      </div>
                      <div className="card-product-footer text-center mt-5">
                        <CButton
                          onClick={() => handleAddCart(item)}
                          disabled={isItemInCart(item)}
                        >
                          Thêm giỏ hàng
                        </CButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="header-product firo-title">
            <h6 className="text-center text-warning">
              {" "}
              Gói cước cáp quang FTTH
            </h6>
            <h2 className="text-center">TỐC ĐỘ CAO - TRANG BỊ MESH</h2>
          </div>
          <div className="body-product">
            <div className="row">
              {dataSpeed.map((item, index) => {
                return (
                  <div className="col-xl-3 col-sm-6 col-12 mt-3">
                    <div className="card-product">
                      <div className="card-product-header">
                        <h4 className="text-center">{item.name_package}</h4>
                      </div>

                      <div className="card-product-body">
                        <h3 className="text-center mt-4 text-bold">
                          {VND.format(item.price_package)}
                        </h3>
                        <h6 className="text-center">Tháng</h6>
                        <div className="card-product-body-item mt-3 text-center">
                          <p>Tốc độ: {item.speed}Mbps</p>
                          <p>
                            Cổng ra quốc tế: {item.international_gateway}Kb/s
                          </p>
                          <p>1 Thiết bị Mesh: {item.mesh}đ</p>
                          <p>2 Thiết bị Mesh: {item.mesh_1}đ</p>
                        </div>
                      </div>
                      <div className="card-product-footer text-center mt-5">
                        <CButton
                          onClick={() => handleAddCart(item)}
                          disabled={isItemInCart(item)}
                        >
                          Thêm giỏ hàng
                        </CButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="header-product firo-title">
            <h6 className="text-center text-warning">
              {" "}
              Gói cước cáp quang FTTH
            </h6>
            <h2 className="text-center">CHO DOANH NGHIỆP</h2>
          </div>
          <div className="body-product">
            <div className="row">
              {dataCompany.map((item, index) => {
                return (
                  <div className="col-xl-4 col-sm-6 col-12 mt-3" key={index}>
                    <div className="card-product">
                      <div className="card-product-header">
                        <h4 className="text-center">{item.name_package}</h4>
                      </div>

                      <div className="card-product-body">
                        <h3 className="text-center mt-4 text-bold">
                          {VND.format(item.price_package)}
                        </h3>
                        <h6 className="text-center">Tháng</h6>
                        <div className="card-product-body-item mt-3 text-center">
                          <p>Tốc độ: {item.speed}Mbps</p>
                          <p>
                            Cổng ra quốc tế: {item.international_gateway}Kb/s
                          </p>
                          <p>1 Thiết bị Mesh: {item.mesh}đ</p>
                          <p>2 Thiết bị Mesh: {item.mesh_1}đ</p>
                        </div>
                      </div>
                      <div className="card-product-footer text-center mt-5">
                        <CButton
                          onClick={() => handleAddCart(item)}
                          disabled={isItemInCart(item)}
                        >
                          Thêm giỏ hàng
                        </CButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="header-product firo-title">
            <h6 className="text-center text-warning">
              {" "}
              Gói cước cáp quang FTTH
            </h6>
            <h2 className="text-center">TỐC ĐỘ CAO</h2>
          </div>
          <div className="body-product">
            <div className="row">
              {dataSpecial.map((item, index) => {
                return (
                  <div className="col-xl-3 col-sm-6 col-12 mt-3">
                    <div className="card-product">
                      <div className="card-product-header">
                        <h4 className="text-center">{item.name_package}</h4>
                      </div>

                      <div className="card-product-body">
                        <h3 className="text-center mt-4 text-bold">
                          {VND.format(item.price_package)}
                        </h3>
                        <h6 className="text-center">Tháng</h6>
                        <div className="card-product-body-item mt-3 text-center">
                          <p>Tốc độ: {item.speed}Mbps</p>
                          <p>
                            Cổng ra quốc tế: {item.international_gateway}Kb/s
                          </p>
                          <p>1 Thiết bị Mesh: {item.mesh}đ</p>
                          <p>2 Thiết bị Mesh: {item.mesh_1}đ</p>
                        </div>
                      </div>
                      <div className="card-product-footer text-center mt-5">
                        <CButton
                          onClick={() => handleAddCart(item)}
                          disabled={isItemInCart(item)}
                        >
                          Thêm giỏ hàng
                        </CButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-area pt-100 pb-70" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src={ImageBackgroundLogo}
                      alt="logo"
                      width="80px"
                      height="80px"
                    />
                  </a>
                </div>
                <p>
                  Là công ty hàng đầu trong lĩnh vực công nghệ, ứng dụng vào
                  công việc và cuộc sống, góp phần đổi mới sáng tạo, chuyển đổi
                  số, ứng dụng công nghệ 4.0 và AI vào việc giám sát, quản lý và
                  điều hành doanh nghiệp.
                </p>
                <div className="footer-social">
                  <a
                    href="https://www.facebook.com/QiTechnologies"
                    target="_blank"
                  ></a>
                  <a
                    href="https://www.linkedin.com/company/qi-technologies-corporation"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCKXpvNwUuxxmpWOqUBkodcQ"
                    target="_blank"
                  >
                    <i className="bx bxl-youtube text-danger"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/QiTechnologies"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget pl-60">
                <h3>Tài liệu kham khảo</h3>
                <ul>
                  <li>
                    <a href="https://qi.com.vn/docs/DIEU-KHOAN-CHUNG-HOP-DONG-CUNG-CAP-VA-SU-DUNG-DICH-VU-QI.docx">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Điều khoản chung
                    </a>
                  </li>
                  <li>
                    <a href="https://qi.com.vn/docs/MAU-HOP-DONG-INTERNET-QINET.docx">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Hợp đồng cung cấp dịch vụ
                    </a>
                  </li>
                  <li>
                    <a href="https://qi.com.vn/docs/Q%C4%90-28-TB-cuoc-2022.pdf">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Bảng cước dịch vụ QiNET
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget pl-60">
                <h3>Công Ty</h3>
                <ul>
                  <li>
                    <a href="https://qi.com.vn/about-us">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="https://qi.com.vn/career">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Tuyển dụng
                    </a>
                  </li>
                  <li>
                    <a href="https://qi.com.vn/contact">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Liên hệ
                    </a>
                  </li>

                  <li>
                    <a href="https://qi.com.vn/customer-partner">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Khách hàng - Đối tác
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget footer-info">
                <h3>Thông Tin Liên Hệ</h3>
                <ul>
                  <li>
                    <span>
                      <i className="bx bxs-phone"></i>
                      Số điện thoại:
                    </span>
                    <a href="tel:1900633827"> 1900633827 - (028) 35149999 </a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-world"></i>
                      Website:
                    </span>
                    <a href="https://qi.com.vn"> qi.com.vn </a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-envelope"></i>
                      Email:
                    </span>
                    <a href="#"> info@qi.com.vn </a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-location-plus"></i>
                      Địa chỉ:
                    </span>
                    Qi Technologies Corporation, Lô U14b - 16a, Đường số 22, KCX
                    Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-text text-center">
        <p>
          © 2023 - All rights reserved
          <a
            href="https://qi.com.vn/"
            target="_blank"
            style={{ paddingLeft: "2px" }}
          >
            QI
          </a>
        </p>
      </div>

      <div className="top-btn">
        <i className="bx bx-chevrons-up bx-fade-up"></i>
      </div>
    </div>
  );
};
export default ProductComponent;
