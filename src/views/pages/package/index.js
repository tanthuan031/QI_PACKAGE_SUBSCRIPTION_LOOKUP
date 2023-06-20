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
        customer_code: "000", //Ma dinh danh
        customer_phone: "07654587654", //Số điện thoại
        customer_identifier_code: "035063002917", //Mã định danh
        customer_name: "Đỗ Văn Hào", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0-eco", "SCTV-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 2,
        customer_code: "0218", //Ma dinh danh
        customer_phone: "0913807808", //Số điện thoại
        customer_identifier_code: "022070003352", //Mã định danh
        customer_name: "Nguyễn Hồng Minh", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV", "QiTech-F0"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 3,
        customer_code: "0249", //Ma dinh danh
        customer_phone: "123456789", //Số điện thoại
        customer_identifier_code: "082090001925", //Mã định danh
        customer_name: "Bùi Hoàng Việt", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fm"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 4,
        customer_code: "0267", //Ma dinh danh
        customer_phone: "034567876543", //Số điện thoại
        customer_identifier_code: "079078008487", //Mã định danh
        customer_name: "Bùi Nguyễn Khang Vy", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 5,
        customer_code: "0264", //Ma dinh danh
        customer_phone: "0376615320", //Số điện thoại
        customer_identifier_code: "079182013059", //Mã định danh
        customer_name: "Bùi Thị Mỹ Chi", //Tên KH
        service_code: "001",
        package_code: ["SCTV-CB-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 6,
        customer_code: "0219", //Ma dinh danh
        customer_phone: "07654587652", //Số điện thoại
        customer_identifier_code: "075092022989", //Mã định danh
        customer_name: "Bùi Văn Giang", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fh2"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 7,
        customer_code: "0221SE", //Ma dinh danh
        customer_phone: "0779648613", //Số điện thoại
        customer_identifier_code: "038094033999", //Mã định danh
        customer_name: "Đặng Lê Minh", //Tên KH
        service_code: "001",
        package_code: ["SCTV-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 8,
        customer_code: "0010", //Ma dinh danh
        customer_phone: "0903214217", //Số điện thoại
        customer_identifier_code: "095084000225", //Mã định danh
        customer_name: "Diệp Chí Dũng", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 9,
        customer_code: "0240", //Ma dinh danh
        customer_phone: "0963385499", //Số điện thoại
        customer_identifier_code: "068089010136", //Mã định danh
        customer_name: "Đinh Quốc Thiên Tài", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 10,
        customer_code: "0241", //Ma dinh danh
        customer_phone: "0973176931", //Số điện thoại
        customer_identifier_code: "001094014903", //Mã định danh
        customer_name: "Đỗ Văn Hiên", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 11,
        customer_code: "0178", //Ma dinh danh
        customer_phone: "0964485510", //Số điện thoại
        customer_identifier_code: "215388448", //Mã định danh
        customer_name: "Dương Thành Đạt", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fhome"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 12,
        customer_code: "0262", //Ma dinh danh
        customer_phone: "0902353474", //Số điện thoại
        customer_identifier_code: "082091006265", //Mã định danh
        customer_name: "Huỳnh Tấn Phát", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F1"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 13,
        customer_code: "0126", //Ma dinh danh
        customer_phone: "0931750207", //Số điện thoại
        customer_identifier_code: "087185015145", //Mã định danh
        customer_name: "Huỳnh Thị Hồng Như", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fhome"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 14,
        customer_code: "0254", //Ma dinh danh
        customer_phone: "0902946507", //Số điện thoại
        customer_identifier_code: "079198030893", //Mã định danh
        customer_name: "Huỳnh Thị Thu Thảo", //Tên KH
        service_code: "001",
        package_code: ["SCTV-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 15,
        customer_code: "0011", //Ma dinh danh
        customer_phone: "0939677468", //Số điện thoại
        customer_identifier_code: "052087006512", //Mã định danh
        customer_name: "Lê Đức Lập", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0-eco"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 16,
        customer_code: "0061", //Ma dinh danh
        customer_phone: "0909581819", //Số điện thoại
        customer_identifier_code: "045083003578", //Mã định danh
        customer_name: "Lê Hồng Hà", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 17,
        customer_code: "0251", //Ma dinh danh
        customer_phone: "0938279648", //Số điện thoại
        customer_identifier_code: "241433993", //Mã định danh
        customer_name: "Lê Ngọc Kim Trúc", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0-eco"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 18,
        customer_code: "0225SE", //Ma dinh danh
        customer_phone: "0987897677", //Số điện thoại
        customer_identifier_code: "052091015806", //Mã định danh
        customer_name: "Lê Văn Trí", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fm"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 19,
        customer_code: "0238", //Ma dinh danh
        customer_phone: "0987042288", //Số điện thoại
        customer_identifier_code: "001088009768", //Mã định danh
        customer_name: "Lương Anh Tú", //Tên KH
        service_code: "001",
        package_code: ["SCTV-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 20,
        customer_code: "0184", //Ma dinh danh
        customer_phone: "0382130060", //Số điện thoại
        customer_identifier_code: "064195006443", //Mã định danh
        customer_name: "Nguyễn  Phương Lan", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fn-h"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 21,
        customer_code: "0198", //Ma dinh danh
        customer_phone: "0383645147", //Số điện thoại
        customer_identifier_code: "080097006714", //Mã định danh
        customer_name: "Nguyễn Anh Kiệt", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fh1"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 22,
        customer_code: "0256", //Ma dinh danh
        customer_phone: "024656875476", //Số điện thoại
        customer_identifier_code: "079087019970", //Mã định danh
        customer_name: "Nguyễn Đỗ Tú", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0-eco"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 23,
        customer_code: "0115", //Ma dinh danh
        customer_phone: "0902376982", //Số điện thoại
        customer_identifier_code: "060195005456", //Mã định danh
        customer_name: "Nguyễn Huỳnh Trúc Quyên", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV", "QiTech-F1"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 24,
        customer_code: "0213", //Ma dinh danh
        customer_phone: "0975380517", //Số điện thoại
        customer_identifier_code: "092094002407", //Mã định danh
        customer_name: "Nguyễn Lê Hinh", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0-eco"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 25,
        customer_code: "0177", //Ma dinh danh
        customer_phone: "0779797270", //Số điện thoại
        customer_identifier_code: "079194025873", //Mã định danh
        customer_name: "Nguyễn Ngọc Phương Uyên", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fh2"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 26,
        customer_code: "0158", //Ma dinh danh
        customer_phone: "0933610308", //Số điện thoại
        customer_identifier_code: "060083000374", //Mã định danh
        customer_name: "Nguyễn Quang Thứ", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F1"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 27,
        customer_code: "0220", //Ma dinh danh
        customer_phone: "0966963879", //Số điện thoại
        customer_identifier_code: "035081000705", //Mã định danh
        customer_name: "Nguyễn Thanh Bình", //Tên KH
        service_code: "001",
        package_code: ["HTVC-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 28,
        customer_code: "0089", //Ma dinh danh
        customer_phone: "0937321082", //Số điện thoại
        customer_identifier_code: "075084000454", //Mã định danh
        customer_name: "Nguyễn Thanh Pha", //Tên KH
        service_code: "001",
        package_code: ["SCTV-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 29,
        customer_code: "0230SE", //Ma dinh danh
        customer_phone: "0932676198", //Số điện thoại
        customer_identifier_code: "086098004053", //Mã định danh
        customer_name: "Nguyễn Vân Khánh Linh", //Tên KH
        service_code: "001",
        package_code: ["HTVC-CB-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 30,
        customer_code: "001", //Ma dinh danh
        customer_phone: "0389999139", //Số điện thoại
        customer_identifier_code: "010074000024", //Mã định danh
        customer_name: "Nguyễn Việt Thắng", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV", "QiTech-F0-eco"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 31,
        customer_code: "0245", //Ma dinh danh
        customer_phone: "24656875476", //Số điện thoại
        customer_identifier_code: "075093018748", //Mã định danh
        customer_name: "Nguyễn Vĩnh Phúc", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 32,
        customer_code: "0269", //Ma dinh danh
        customer_phone: "0937248748", //Số điện thoại
        customer_identifier_code: "091082019208", //Mã định danh
        customer_name: "Nguyễn Vũ Bình", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F1", "HTVC-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 33,
        customer_code: "0096", //Ma dinh danh
        customer_phone: "0948101869", //Số điện thoại
        customer_identifier_code: "079083022598", //Mã định danh
        customer_name: "Nguyễn Xuân Du", //Tên KH
        service_code: "001",
        package_code: ["SCTV-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 34,
        customer_code: "0259", //Ma dinh danh
        customer_phone: "0384010540", //Số điện thoại
        customer_identifier_code: "091093003076", //Mã định danh
        customer_name: "Phạm Đức Duy", //Tên KH
        service_code: "001",
        package_code: ["QiTech-F0-eco"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 35,
        customer_code: "0027", //Ma dinh danh
        customer_phone: "0935279281", //Số điện thoại
        customer_identifier_code: "080082020474", //Mã định danh
        customer_name: "Phan Tấn Quốc", //Tên KH
        service_code: "001",
        package_code: ["HTVC-P2-HMTVC"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 36,
        customer_code: "0185", //Ma dinh danh
        customer_phone: "0938377397", //Số điện thoại
        customer_identifier_code: "080087000184", //Mã định danh
        customer_name: "Phạm Hoàng Chương", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fm-h"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 37,
        customer_code: "0216", //Ma dinh danh
        customer_phone: "0326015070", //Số điện thoại
        customer_identifier_code: "060195013766", //Mã định danh
        customer_name: "Phạm Thị Hằng", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fm"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 38,
        customer_code: "0266", //Ma dinh danh
        customer_phone: "0975380517", //Số điện thoại
        customer_identifier_code: "036300010352", //Mã định danh
        customer_name: "Phạm Thu Hoài", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fh1"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 39,
        customer_code: "0114", //Ma dinh danh
        customer_phone: "0903682711", //Số điện thoại
        customer_identifier_code: "037074007790", //Mã định danh
        customer_name: "Phạm Văn Đang", //Tên KH
        service_code: "001",
        package_code: ["SCTV-P2-HMTVC", "QiTech-F0"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 40,
        customer_code: "0243", //Ma dinh danh
        customer_phone: "7654587654", //Số điện thoại
        customer_identifier_code: "352114949", //Mã định danh
        customer_name: "Tô Minh Triết", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fm"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 41,
        customer_code: "0190", //Ma dinh danh
        customer_phone: "0971724467", //Số điện thoại
        customer_identifier_code: "060195009037", //Mã định danh
        customer_name: "Trà Thị Dạ Hương", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV", "QiTech-F1"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 42,
        customer_code: "0268", //Ma dinh danh
        customer_phone: "0765990792", //Số điện thoại
        customer_identifier_code: "079098013032", //Mã định danh
        customer_name: "Trần Nghi Thức", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fm-h"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 43,
        customer_code: "0260", //Ma dinh danh
        customer_phone: "0354758936", //Số điện thoại
        customer_identifier_code: "034094012413", //Mã định danh
        customer_name: "Vũ Thanh Tùng", //Tên KH
        service_code: "001",
        package_code: ["HTV-TMS-2TV"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
      {
        id: 44,
        customer_code: "0221", //Ma dinh danh
        customer_phone: "0903842877", //Số điện thoại
        customer_identifier_code: "082179019434", //Mã định danh
        customer_name: "Trần Thị Mỹ Nhị", //Tên KH
        service_code: "001",
        package_code: ["QiTech-Fn-h"], //Mã dịch vụ
        status: 0,
        customer_address:
          "U14b - 16a, Đường số 22, KCX Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        billing_period: "Tháng 5-2023",
      },
    ];

    const dataPackage = [
      {
        id: 1,
        package_name: "INTERNET",
        package_code: "QiTech-F0-eco",
        package_price: 330000,
      },
      {
        id: 2,
        package_name: "INTERNET",
        package_code: "QiTech-F0",
        package_price: 550000,
      },
      {
        id: 3,
        package_name: "INTERNET",
        package_code: "QiTech-F1",
        package_price: 770000,
      },
      {
        id: 4,
        package_name: "INTERNET",
        package_code: "QiTech-Fm-h",
        package_price: 275000,
      },
      {
        id: 5,
        package_name: "INTERNET",
        package_code: "QiTech-Fh1",
        package_price: 220000,
      },
      {
        id: 6,
        package_name: "INTERNET",
        package_code: "QiTech-Fm",
        package_price: 440000,
      },
      {
        id: 7,
        package_name: "INTERNET",
        package_code: "QiTech-Fh2",
        package_price: 242000,
      },
      {
        id: 8,
        package_name: "INTERNET",
        package_code: "QiTech-Fhome",
        package_price: 202000,
      },
      {
        id: 9,
        package_name: "INTERNET",
        package_code: "QiTech-Fn-h",
        package_price: 180000,
      },
      {
        id: 10,
        package_name: "THC",
        package_code: "HTVC-CB-HMTVC",
        package_price: 77000,
      },
      {
        id: 11,
        package_name: "THC",
        package_code: "HTVC-P2-HMTVC",
        package_price: 120000,
      },
      {
        id: 12,
        package_name: "THC",
        package_code: "HTV-TMS-2TV",
        package_price: 80000,
      },
      {
        id: 13,
        package_name: "THC",
        package_code: "SCTV-CB-HMTVC",
        package_price: 140000,
      },
      {
        id: 14,
        package_name: "THC",
        package_code: "SCTV-P2-HMTVC",
        package_price: 142000,
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
