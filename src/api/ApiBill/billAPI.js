import axiosBILL from "../axiosAPIBill";

export const feeLookup = async (body) => {
  const url = "api/customer/bill";
  const response = await axiosBILL.post(url, body);
  if (response.status === false) {
    return 403;
  } else if (response.status === true) {
    return response.data;
  } else {
    return 500;
  }
};
