export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 px-4 sm:px-6 md:px-20 py-10 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Thông tin công ty */}
        <div>
          <h3 className="text-base font-semibold mb-2">
            CÔNG TY TNHH TM OANH NGUYỄN
          </h3>
          <p className="mt-2">
            <div><span className="font-bold">Địa chỉ:</span> Số 109 đường số 18, KDC Bình Hưng, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh</div>
          </p>
          <p>
            <strong>Điện thoại:</strong> 0933.345.095
          </p>
          <p>
            <strong>Email:</strong> tmoanhnguyen@gmail.com
          </p>
        </div>

        {/* Cột 2: Chủ sở hữu */}
        <div>
          <h3 className="text-base font-semibold mb-2">
            Thông tin người đại diện
          </h3>
          <p>
            <strong>Họ và tên:</strong> Nguyễn Thị Kiều Oanh
          </p>
          <p>
            <strong>Giới tính:</strong> Nữ
          </p>
          <p>
            <strong>Ngày sinh:</strong> 21/08/1988
          </p>
          <p>
            <strong>Dân tộc:</strong> Kinh
          </p>
          <p>
            <strong>Quốc tịch:</strong> Việt Nam
          </p>
          <p>
            <strong>Số CCCD:</strong> 094188000154
          </p>
          <p>
            <strong>Ngày cấp:</strong> 13/08/2021
          </p>
          <p>
            <strong>Nơi cấp:</strong> Cục Cảnh sát QLHC về TTXH
          </p>
        </div>

        {/* Cột 3: Địa chỉ thường trú & tạm trú */}
        <div>
          <h3 className="text-base font-semibold mb-2">
            Địa chỉ thường trú / liên hệ
          </h3>
          <p>
            <strong>Thường trú:</strong>
            <br />
            C3/88A, ấp 3, Xã Phong Phú, Huyện Bình Chánh, TP. Hồ Chí Minh
          </p>
          <p>
            <strong>Liên hệ:</strong>
            <br />
            C3/88A, ấp 3, Xã Phong Phú, Huyện Bình Chánh, TP. Hồ Chí Minh
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} CÔNG TY TNHH TM OANH NGUYỄN. All rights
        reserved.
      </div>
    </footer>
  );
}
