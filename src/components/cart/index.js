import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataCompany as importedDataCompany,
  dataFamily as importedDataFamily,
  dataSpecial as importedDataSpecial,
  dataSpeed as importedDataSpeed,
} from "src/assets/data/dataProduct";
import { setCountCartItem } from "src/redux/reducer/product/product.reducer";
import { countCartItemSelector } from "src/redux/selectors/product/product.selector";
import ImageBackgroundLogo from "../../assets/img/logo_qi.png";
import "./style.css";
import { useState } from "react";
import { CButton } from "@coreui/react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { paymentSchema } from "src/adapter/cart";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { SuccessToast } from "../commons/Layouts/Alerts";
import { BlockUIAPI, BlockUICLIENT } from "../commons/Layouts/Notiflix";
import Notiflix from "notiflix";
import { error } from "jquery";
import { message, Steps, theme } from "antd";
import Footer from "../footer";
const CartDetailComponent = (props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(paymentSchema),
  });
  const dispatch = useDispatch();
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [dataCart, setDataCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [packageData, setPackageData] = useState({});
  useEffect(() => {
    const existingCartCountData =
      JSON.parse(localStorage.getItem("dataCart")) || [];
    setDataCart(existingCartCountData);
    const dataTotal = calculateTotalPrice(existingCartCountData);
    setTotalPrice(dataTotal);
  }, []);

  // Hàm tính tổng tiền
  const calculateTotalPrice = (cartData) => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.price_package * item.quantity;
    });
    return total;
  };
  const handleQuantityChange = (event, index, item) => {
    const { value } = event.target;

    setDataCart((prevDataCart) => {
      const newDataCart = [...prevDataCart];
      newDataCart[index].quantity = parseInt(value);
      return newDataCart;
    });
    const existingCartData = JSON.parse(localStorage.getItem("dataCart")) || [];
    const existingProduct = existingCartData.find(
      (product) => product.group_id === item.group_id && product.id === item.id
    );

    if (existingProduct) {
      existingProduct.quantity = parseInt(value);
    }
    const updatedCartData = [...dataCart];
    updatedCartData[index].quantity = parseInt(value);
    const updatedTotalPrice = calculateTotalPrice(updatedCartData);

    setTotalPrice(updatedTotalPrice);
    localStorage.setItem("dataCart", JSON.stringify(existingCartData));
  };

  const handlePayment = (data) => {
    const processedData = dataCart.reduce((result, item) => {
      const { id, name_package, quantity } = item;
      result[id] = `${name_package} - ${quantity} tháng`;

      return result;
    }, {});
    const values = Object.values(processedData);
    const result = values.join(", ");
    const dataSubmit = {
      full_name: data.full_name,
      phone: data.phone,
      email: data.email,
      service: result,
      message: data.notes,
    };
    BlockUIAPI("#cart");
    axios
      .post("https://qi.com.vn/internet-register/sendInfo", dataSubmit)
      .then((response) => {
        // Xử lý khi gửi thành công
        SuccessToast(
          "Đơn hàng của bạn đã đặt thành công. Công ty sẽ liên hệ lại với bạn trong thời gian sớm nhất",
          5000
        );
        Notiflix.Block.remove("#root");
        localStorage.removeItem("dataCart");
        localStorage.removeItem("countCart");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        // Xử lý khi gửi thất bại
        SuccessToast("Có lỗi xảy ra . Vui lòng thử lại", 3000);
        Notiflix.Block.remove("#root");
      });
  };

  const steps = [
    {
      title: "Tóm tắt đơn hàng",
      content: "Tóm tắt đơn hàng",
    },
    {
      title: "Thanh toán",
      content: "Thông tin khách hàng",
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const handleDeleteCart = (item) => {
    let exitsCountCart = JSON.parse(localStorage.getItem("countCart"));
    const updatedDataCart = dataCart.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setDataCart(updatedDataCart);
    const dataTotal = calculateTotalPrice(updatedDataCart);
    setTotalPrice(dataTotal);

    // Lưu vào localStorage nếu cần
    localStorage.setItem("dataCart", JSON.stringify(updatedDataCart));

    if (exitsCountCart > 0) {
      localStorage.setItem("countCart", JSON.stringify(exitsCountCart - 1));
      dispatch(setCountCartItem(exitsCountCart - 1));
    }
  };
  return (
    <div className="container-fluid">
      <div className="container mt-5 mb-5" id="cart">
        <div className="container  ">
          <h3 className="text-center mb-3">
            {current === 0 ? "Giỏ hàng" : "Thông tin đơn hàng"}
          </h3>
          {dataCart.length > 0 ? (
            <>
              <Steps current={current} items={items} />
              <Form
                onSubmit={handleSubmit(handlePayment)}
                encType="multipart/form-data"
              >
                <div className="container">
                  <div className="row mt-5">
                    {current === 0 && (
                      <div className="col-xl-8 col-sm-12 col-12 mb-5">
                        <div
                          style={{
                            background: "#fff",
                            borderRadius: "10px",
                            padding: "30px",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <h5 className="text-center mb-4 ">
                            {" "}
                            Danh sách gói cước
                          </h5>
                          <div
                            style={{
                              maxHeight: "400px",
                              overflowY: "auto",
                            }}
                          >
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Tên gói cước</th>
                                  <th scope="col">Giá tiền</th>
                                  <th scope="col">Gói/Tháng</th>
                                  <th scope="col">Tổng tiền</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {dataCart.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <th scope="row">{index + 1}</th>
                                      <td>
                                        <h5 style={{ margin: 0 }}>
                                          {item.name_package}
                                        </h5>
                                        <p
                                          style={{
                                            margin: 0,
                                            fontSize: ".8rem",
                                          }}
                                        >
                                          ({item.group_name})
                                        </p>
                                      </td>
                                      <td>{VND.format(item.price_package)}</td>
                                      <td className=" d-flex justify-content-center">
                                        <Form.Select
                                          onChange={(event) =>
                                            handleQuantityChange(
                                              event,
                                              index,
                                              item
                                            )
                                          }
                                          defaultValue={
                                            item.quantity == 1
                                              ? 1
                                              : item.quantity == 6
                                              ? 6
                                              : 12
                                          }
                                        >
                                          <option
                                            value="1"
                                            // selected={
                                            //   item.quantity == 1 ? true : false
                                            // }
                                          >
                                            1
                                          </option>
                                          <option
                                            value="6"
                                            // selected={
                                            //   item.quantity == 6 ? true : false
                                            // }
                                          >
                                            6
                                          </option>
                                          <option
                                            value="12"
                                            // selected={
                                            //   item.quantity == 12 ? true : false
                                            // }
                                          >
                                            12
                                          </option>
                                        </Form.Select>
                                      </td>
                                      <td>
                                        <span className="text-bold">
                                          {VND.format(
                                            item.quantity * item.price_package
                                          )}
                                        </span>
                                      </td>
                                      <td className="text-center cursor-pointer">
                                        <span
                                          className="text-bold text-danger "
                                          onClick={() => handleDeleteCart(item)}
                                        >
                                          <i className="bx bx-trash text-center" />
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                          {/* <h4 className=" mt-3">
                        Tổng tiền:
                        <span className="text-danger">
                          {VND.format(totalPrice)}{" "}
                        </span>
                      </h4> */}
                        </div>
                      </div>
                    )}

                    {current === 1 && (
                      <div
                        className="col-xl-8 col-sm-12 col-12 mb-5"
                        style={{
                          background: "#fff",
                          borderRadius: "5px",
                          padding: "30px",
                        }}
                      >
                        <h5 className="text-center mb-4 ">
                          Thông tin khách hàng
                        </h5>

                        <div className="row">
                          <div className="col-xl-12 col-sm-12 col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Họ và tên</Form.Label>
                              <Form.Control
                                placeholder="Nhập họ và tên"
                                name="full_name"
                                {...register("full_name")}
                              />
                              <small className="text-danger font-weight-bold">
                                {errors?.full_name?.message}
                              </small>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-xl-6 col-sm-12 col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Nhập email"
                                name="email"
                                {...register("email")}
                              />
                              <small className="text-danger font-weight-bold">
                                {errors?.email?.message}
                              </small>
                            </Form.Group>
                          </div>
                          <div className="col-xl-6 col-sm-12 col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Số điện thoại</Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="Nhập số điện thoại"
                                name="phone"
                                {...register("phone")}
                              />
                              <small className="text-danger font-weight-bold">
                                {errors?.phone?.message}
                              </small>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-sm-12 col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Địa chỉ</Form.Label>
                              <Form.Control
                                placeholder="Nhập địa chỉ"
                                name="address"
                                {...register("address")}
                              />
                              <small className="text-danger font-weight-bold">
                                {errors?.address?.message}
                              </small>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-sm-12 col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Ghi chú</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={2}
                                name="notes"
                                {...register("notes")}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="col-xl-4 col-sm-12 col-12 mb-5">
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "30px",
                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <h4 className="text-center">Tóm tắt đơn hàng</h4>
                        <hr></hr>
                        <div className=" mt-4">
                          <h5 className="d-flex">
                            <div> Giá tiền : </div>
                            <div className="text-danger">
                              {" "}
                              {VND.format(totalPrice)}
                            </div>
                          </h5>
                        </div>

                        <div className="mt-3">
                          <div className="text-summary">
                            <h5 className="info-invoice-left">
                              Phương thức thanh toán
                            </h5>
                            <div className=" justify-content-between">
                              <Form.Check
                                className="info-invoice-left"
                                type="radio"
                                label="Thanh toán tại điểm giao dịch"
                                name="payment"
                                id="vnpay"
                                value="VNPay"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="">
                          <h5 className="d-flex">
                            <div>Tổng tiền : </div>
                            <div className="text-danger text-center">
                              {VND.format(totalPrice)}
                            </div>
                          </h5>
                        </div>
                        <div className="text-center mt-3">
                          {/* <button
                          className="btn btn-secondary mt-3 "
                          style={{ marginRight: "10px" }}
                        >
                          Hủy
                        </button> */}
                          {/* <button
                            className="btn btn-primary mt-3"
                            type="submit"
                          >
                            Thanh toán
                          </button> */}

                          {current < steps.length - 1 && (
                            <>
                              <Button
                                type="primary"
                                onClick={() => next()}
                                size="sm"
                              >
                                Thanh toán
                              </Button>
                            </>
                          )}
                          {current > 0 && (
                            <Button
                              style={{
                                margin: "0 8px",
                              }}
                              variant="secondary"
                              onClick={() => prev()}
                              size="sm"
                            >
                              Quay lại
                            </Button>
                          )}
                          {current === steps.length - 1 && (
                            <Button
                              type="submit"
                              onClick={() =>
                                message.success("Processing complete!")
                              }
                              size="sm"
                            >
                              Đặt hàng
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </>
          ) : (
            <div style={{ minHeight: "300px" }}>
              <img
                src="https://portal.px1.vn/static/images/404error.png"
                alt="package"
                style={{ height: "70vh", margin: "0 auto" }}
                className="d-flex justify-content-center "
              ></img>
              <h5 className="text-center">
                Giỏ hàng trống{" "}
                <span>
                  <a href="/product">Thêm gói cước</a>
                </span>
              </h5>
            </div>
          )}
          <div
            style={{
              marginTop: 24,
            }}
          ></div>
        </div>
      </div>

      <Footer />
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
export default CartDetailComponent;
