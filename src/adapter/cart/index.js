import * as yup from "yup";
export const paymentSchema = yup.object({
  full_name: yup
    .string()
    .required("Vui lòng nhập họ và tên")
    .matches(
      /^[0-9a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ.\-\_]+$/,
      "Không đúng định dạng"
    )
    .trim(),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Không đúng định dạng"
    )
    .trim(),
  phone: yup
    .number()
    .typeError("Vui nhập số điện thoại ")
    .required("Vui lòng nhập số điện thoại"),
  address: yup
    .string()
    .required("Vui lòng nhập địa chỉ")
    .matches(
      /^[0-9a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ.\-\_]+$/,
      "Không đúng định dạng"
    )
    .trim(),
});
