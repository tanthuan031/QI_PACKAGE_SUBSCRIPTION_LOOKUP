import { ErrorToast } from "src/components/commons/Layouts/Alerts";
import axiosBILL from "../axiosAPIBill";

export const feeLookup = async (body) => {
  const url = "api/customer/bill";
  const response = await axiosBILL.post(url, body);
  if (response !== undefined) {
    if (response.status === false) {
      return 403;
    } else if (response.status === true) {
      return response.data;
    } else {
      return 500;
    }
  } else {
    ErrorToast("Server đang bảo trì. Vui lòng quay lại sau", 1500);
    return 500;
  }
};

export const vnpayPaymentPackage = async (body) => {
  const url = "api/vnpay-payment";
  const response = await axiosBILL.post(url, body);
  if (response !== undefined) {
    if (response.message === "success") {
      return response.data;
    } else {
      return 500;
    }
  } else {
    ErrorToast("Server đang bảo trì. Vui lòng quay lại sau", 1500);
    return 500;
  }
};
