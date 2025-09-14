import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDropItem from "./DragDropItem";
import DropZone from "./DropZone";

const CORRECT_ANSWERS = {
  "1. Vật chất": [
    "Tồn tại khách quan, độc lập với ý thức",
    "Là cái có trước, quyết định ý thức",
  ],
  "2. Nguồn gốc, bản chất và kếta cấu của ý thức": [
    "Nguồn gốc tự nhiên: bộ não người",
    "Nguồn gốc xã hội: lao động và ngôn ngữ",
    "Bản chất: phản ánh năng động, sáng tạo thế giới khách quan",
    "Kết cấu: tri thức, tình cảm, niềm tin, ý chí",
  ],
  "3. Mối quan hệ giữa vật chất và ý thức": [
    "Vật chất quyết định ý thức",
    "Ý thức tác động trở lại vật chất thông qua thực tiễn",
    "Mối quan hệ mang tính biện chứng",
  ],
  "1. Hai loại hình biện chứng": [
    "Biện chứng khách quan: vận động của tự nhiên và xã hội",
    "Biện chứng chủ quan: quá trình tư duy và nhận thức",
  ],
  "2. Nội dung và hai nguyên lý cơ bản": [
    "Nguyên lý mối liên hệ phổ biến",
    "Mọi sự vật đều liên hệ và tác động lẫn nhau",
    "Nguyên lý phát triển",
    "Sự vật luôn vận động, phát triển qua mâu thuẫn nội tại",
    "Quy luật lượng – chất",
    "Quy luật mâu thuẫn",
    "Quy luật phủ định của phủ định",
  ],
};

const DRAG_ITEMS = Object.values(CORRECT_ANSWERS).flat();

export default function PosterAnalysisApp() {
  const [zones, setZones] = useState(
    Object.keys(CORRECT_ANSWERS).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {})
  );

  const [availableAnswers, setAvailableAnswers] = useState(DRAG_ITEMS);

  const handleRemove = (zoneKey, answer) => {
    setZones((prev) => ({
      ...prev,
      [zoneKey]: prev[zoneKey].filter((item) => !item.includes(answer)),
    }));
    setAvailableAnswers((prev) => [...prev, answer]);
  };

  const handleDrop = (zoneKey, answer) => {
    const isCorrect = CORRECT_ANSWERS[zoneKey]?.includes(answer);
    const label = isCorrect ? `✅ ${answer}` : `❌ ${answer}`;

    setZones((prev) => ({
      ...prev,
      [zoneKey]: [...prev[zoneKey], label],
    }));

    setAvailableAnswers((prev) => prev.filter((item) => item !== answer));
  };

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container-fluid">
        {/* Nút chuyển trang */}
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setCurrentPage(0)}
            disabled={currentPage === 0}
          >
            ← Poster
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            Mind Map →
          </button>
        </div>

        {/* Vùng trượt ngang */}
        <div
          className="d-flex transition-all"
          style={{
            width: "200%",
            transform: `translateX(-${currentPage * 50}%)`,
            transition: "transform 0.5s ease",
            gap: "2rem",
          }}
        >
          {/* Slide 1: Poster + Phân tích */}
          <div className="w-50 pe-3 col-md-8">
            <div className="card shadow h-100 ">
              <div className="card-body d-flex">
                <div className="me-5" style={{ flex: "0 0 35%" }}>
                  <h2 className="h5 fw-bold">Poster</h2>
                  <div className="border rounded overflow-hidden text-center">
                    <img
                      alt="Poster"
                      src="/poster.jpg"
                      className="img-fluid rounded shadow mt-2"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>

                {/* Phân tích poster */}
                <div
                  style={{
                    flex: "1 1 auto",
                    fontSize: "1.2rem",
                    paddingTop: "1rem",
                  }}
                >
                  <section className="mt-4">
                    <h2 className="h6 fw-bold text-primary mb-3">
                      🧠 Phân tích dưới góc nhìn Chủ nghĩa Duy vật Biện chứng
                    </h2>
                    {/* Giới thiệu hình ảnh */}
                    <section className="mb-4">
                      <h3 className="h6 fw-bold text-secondary">
                        📌 Giới thiệu hình ảnh
                      </h3>
                      <ul className="small mt-2">
                        <li>
                          Trái Đất, bộ não, dây xích, bánh răng, ánh sáng.
                        </li>
                        <li>
                          Thể hiện mối quan hệ giữa con người, công nghệ và nhận
                          thức.
                        </li>
                      </ul>
                    </section>

                    {/* Vật chất và ý thức */}
                    <section className="mb-4">
                      <h3 className="h6 fw-bold text-secondary">
                        🧩 Vật chất và ý thức
                      </h3>
                      <ul className="small mt-2">
                        <li>
                          <strong>Trái Đất</strong>: biểu tượng của vật chất
                          khách quan.
                        </li>
                        <li>
                          <strong>Bộ não</strong>: biểu tượng của ý thức – sản
                          phẩm của vật chất có tổ chức cao.
                        </li>
                        <li>
                          <strong>Dây xích</strong>: cho thấy ý thức bị chi phối
                          bởi điều kiện vật chất.
                        </li>
                        <li>
                          <strong>Cầu thang lên ánh sáng</strong>: quá trình
                          nhận thức và phát triển tư duy.
                        </li>
                      </ul>
                    </section>

                    {/* Phép biện chứng duy vật */}
                    <section className="mb-4">
                      <h3 className="h6 fw-bold text-secondary">
                        🔄 Phép biện chứng duy vật
                      </h3>

                      <p className="small mb-1">
                        <strong>Hai loại hình biện chứng:</strong>
                      </p>
                      <ul className="small">
                        <li>
                          <strong>Khách quan</strong>: Trái Đất, bánh răng, mạch
                          điện – sự vận động của thế giới vật chất.
                        </li>
                        <li>
                          <strong>Chủ quan</strong>: Bộ não, ánh sáng – quá
                          trình tư duy và nhận thức của con người.
                        </li>
                      </ul>

                      <p className="small mt-3 mb-1">
                        <strong>Hai nguyên lý cơ bản:</strong>
                      </p>
                      <ul className="small">
                        <li>
                          <strong>Mối liên hệ phổ biến</strong>: dây xích kết
                          nối mọi yếu tố – mọi sự vật đều liên hệ và tác động
                          lẫn nhau.
                        </li>
                        <li>
                          <strong>Sự phát triển</strong>: cầu thang lên ánh sáng
                          – vận động từ thấp đến cao, từ chưa biết đến biết.
                        </li>
                      </ul>
                    </section>

                    {/* Thông điệp tổng thể */}
                    <section>
                      <h3 className="h6 fw-bold text-secondary">
                        💡 Thông điệp tổng thể
                      </h3>
                      <ul className="small mt-2">
                        <li>
                          Vật chất là nền tảng, ý thức là công cụ cải biến thế
                          giới.
                        </li>
                        <li>
                          Con người đang trên hành trình nhận thức, vượt qua
                          ràng buộc để hướng tới tri thức và tự do.
                        </li>
                        <li>
                          Công nghệ, trí tuệ và sự vận động không ngừng là chìa
                          khóa để hiểu và thay đổi thế giới.
                        </li>
                      </ul>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Mind Map kéo thả */}
          <div className="w-50 ps-3" style={{ paddingRight: '2rem' }}>
            <div className="card shadow h-100">
              <div className="card-body">
                <button
                  className="btn btn-outline-danger btn-sm mb-3"
                  onClick={() => {
                    setZones(
                      Object.keys(CORRECT_ANSWERS).reduce((acc, key) => {
                        acc[key] = [];
                        return acc;
                      }, {})
                    );
                    setAvailableAnswers([...DRAG_ITEMS]);
                  }}
                >
                  🔄 Làm lại
                </button>

                <DndProvider backend={HTML5Backend}>
                  <h2 className="h5 fw-bold mb-4 text-primary">
                    🎯 Kéo thả đáp án đúng vào từng vùng kiến thức
                  </h2>

                  <div className="mb-4">
                    <h6 className="fw-semibold">📦 Đáp án có thể kéo:</h6>
                    <div className="d-flex flex-wrap">
                      {availableAnswers.map((text) => (
                        <DragDropItem key={text} text={text} />
                      ))}
                    </div>
                  </div>

                  {Object.keys(CORRECT_ANSWERS).map((zoneKey) => (
                    <DropZone
                      key={zoneKey}
                      title={zoneKey}
                      acceptedAnswers={zones[zoneKey] || []}
                      onDrop={(text) => handleDrop(zoneKey, text)}
                      onRemove={(text) => handleRemove(zoneKey, text)}
                    />
                  ))}
                </DndProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
