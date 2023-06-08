import React, { useEffect } from "react";
import PackageComponent from "src/components/package";
import "./style.css";
import PaymentComponent from "src/components/payment";
import { useSelector } from "react-redux";
import { isCreatePaymentSelector } from "src/redux/selectors";
const PackagePage = () => {
  useEffect(() => {
    // Tạo dữ liệu mẫu
    const data = [
      {
        id: 1,
        customer_code: "001", //Ma dinh danh
        customer_phone: "0903906072", //Số điện thoại
        customer_identifier_code: "24313120", //Mã định danh
        customer_name: "VŨ THỊ THU", //Tên KH
        service_code: "0001", //Mã dịch vụ
        package_code: ["01"],
        status: 0,
      },
      {
        id: 2,
        customer_code: "002", //Ma dinh danh
        customer_phone: "0399102726", //Số điện thoại
        customer_identifier_code: "24313121", //Mã định danh
        customer_name: "TRẦN ANH TUẤN", //Tên KH
        service_code: "0001", //Mã dịch vụ
        package_code: ["01", "02", "04"],
        status: 0,
      },
      {
        id: 3,
        customer_code: "003", //Ma dinh danh
        customer_phone: "0399102726", //Số điện thoại
        customer_identifier_code: "24313122", //Mã định danh
        customer_name: "NGUYỄN TẤN KHOA", //Tên KH
        service_code: "0001", //Mã dịch vụ
        package_code: ["01", "03"],
        status: 0,
      },
      {
        id: 4,
        customer_code: "004", //Ma dinh danh
        customer_phone: "0399102726", //Số điện thoại
        customer_identifier_code: "24313123", //Mã định danh
        customer_name: "TRẦN THỊ THU THỦY", //Tên KH
        service_code: "0001", //Mã dịch vụ
        package_code: ["01", "02", "05", "04"],
        status: 0,
      },
      {
        id: 5,
        customer_code: "005", //Ma dinh danh
        customer_phone: "0399102726", //Số điện thoại
        customer_identifier_code: "24313123", //Mã định danh
        customer_name: "TRẦN THỊ HỒNG", //Tên KH
        service_code: "0001", //Mã dịch vụ
        package_code: ["02", "05", "04"],
        status: 0,
      },
    ];

    const dataPackage = [
      {
        id: 1,
        package_name: "Gói cước tiêu chuẩn",
        package_code: "01",
        package_price: 275000,
      },
      {
        id: 2,
        package_name: "Gói cước cao cấp",
        package_code: "02",
        package_price: 275000,
      },
      {
        id: 3,
        package_name: "Gói cước thương gia",
        package_code: "03",
        package_price: 275000,
      },
      {
        id: 4,
        package_name: "Gói cước gia đình",
        package_code: "04",
        package_price: 275000,
      },
      {
        id: 5,
        package_name: "Gói cước doanh nghiệp",
        package_code: "05",
        package_price: 275000,
      },
    ];

    // Lưu dữ liệu vào localStorage
    localStorage.setItem("myData", JSON.stringify(data));
    localStorage.setItem("myPackage", JSON.stringify(dataPackage));
  }, []);
  const isCheckout = useSelector(isCreatePaymentSelector);
  return (
    <>
      <div className="row ">
        {isCheckout && <PaymentComponent />}
        {!isCheckout && <PackageComponent />}
      </div>
    </>
  );
};
export default PackagePage;
