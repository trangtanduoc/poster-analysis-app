import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const MIND_MAP = {
  id: "root",
  title: "Chương 2: Chủ nghĩa duy vật biện chứng",
  children: [
    {
      id: "i-vatlych-yithuc",
      title: "I. Vật chất và ý thức",
      children: [
        {
          id: "1-nguoncg-bcnct",
          title: "2. Nguồn gốc, bản chất và kết cấu của ý thức",
          children: [
            { id: "1.1", title: "Nguồn gốc tự nhiên: bộ não người là cơ sở vật chất của ý thức" },
            { id: "1.2", title: "Nguồn gốc xã hội: lao động và ngôn ngữ làm nảy sinh ý thức" },
            { id: "1.3", title: "Bản chất: ý thức là sự phản ánh năng động, sáng tạo thế giới khách quan" },
            { id: "1.4", title: "Kết cấu: tri thức, tình cảm, niềm tin, ý chí" },
          ],
        },
        {
          id: "2-moiqh-vatly-yithuc",
          title: "3. Mối quan hệ giữa vật chất và ý thức",
          children: [
            { id: "2.1", title: "Vật chất quyết định ý thức" },
            { id: "2.2", title: "Ý thức tác động trở lại vật chất thông qua thực tiễn" },
            { id: "2.3", title: "Hai loại hình biện chứng: khách quan và chủ quan" },
          ],
        },
      ],
    },
    {
      id: "ii-phepbd",
      title: "II. Phép biện chứng duy vật",
      children: [
        {
          id: "3-noidung-hainguyenly",
          title: "2. Nội dung và hai nguyên lý cơ bản",
          children: [
            { id: "3.1", title: "Nguyên lý mối liên hệ phổ biến" },
            { id: "3.2", title: "Nguyên lý phát triển" },
            { id: "3.3", title: "Các quy luật: lượng – chất, mâu thuẫn, phủ định của phủ định" },
          ],
        },
      ],
    },
  ],
};

function renderAccordion(nodes) {
  return (
    <div className="accordion">
      {nodes.map((node) => {
        const collapseId = `${node.id}-collapse`;
        const headingId = `${node.id}-heading`;

        // Nếu là node cuối (không có children) → hiển thị trực tiếp
        if (!node.children || node.children.length === 0) {
          return (
            <div className="ms-3 my-1 small text-muted" key={node.id}>
              • {node.title}
            </div>
          );
        }

        // Ngược lại render accordion cho node có children
        return (
          <div className="accordion-item" key={node.id}>
            <h2 className="accordion-header" id={headingId}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded="false"
                aria-controls={collapseId}
              >
                {node.title}
              </button>
            </h2>

            <div
              id={collapseId}
              className="accordion-collapse collapse"
              aria-labelledby={headingId}
            >
              <div className="accordion-body">
                {renderAccordion(node.children)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PosterAnalysisApp() {
  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container">
        <div className="row g-4">
          {/* Left column: poster */}
          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h2 className="h5 fw-bold">Poster</h2>
                <div className="border rounded overflow-hidden text-center">
                  <img
                    alt="Poster"
                    src="/poster.jpg"
                    className="img-fluid rounded shadow mt-2"
                    style={{ maxHeight: "300px", objectFit: "contain", width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle column: Analysis */}
          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h2 className="h5 fw-bold mb-3">Phân tích Poster</h2>

                <section className="mb-3">
                  <h3 className="h6 fw-semibold">1. Vật chất và ý thức — Nguồn gốc, bản chất, kết cấu</h3>
                  <ul className="mt-2 small">
                    <li><strong>Bộ não</strong>: biểu tượng cơ sở tự nhiên của ý thức.</li>
                    <li><strong>Lao động và ngôn ngữ</strong>: nguồn gốc xã hội của ý thức.</li>
                    <li><strong>Bản chất</strong>: sự phản ánh sáng tạo của thế giới khách quan.</li>
                    <li><strong>Kết cấu</strong>: tri thức, tình cảm, niềm tin, ý chí.</li>
                  </ul>
                </section>

                <section className="mb-3">
                  <h3 className="h6 fw-semibold">2. Mối quan hệ giữa vật chất & ý thức</h3>
                  <ul className="mt-2 small">
                    <li><strong>Trái đất</strong>: tượng trưng cho vật chất khách quan, nền tảng quyết định.</li>
                    <li><strong>Bánh răng, công cụ</strong>: thể hiện vai trò của ý thức trong việc cải tạo thực tiễn.</li>
                    <li><strong>Hai loại hình biện chứng</strong>: khách quan (tự nhiên, xã hội) và chủ quan (ý thức con người).</li>
                  </ul>
                </section>

                <section>
                  <h3 className="h6 fw-semibold">3. Phép biện chứng duy vật — Nội dung & Hai nguyên lý</h3>
                  <p className="small mt-2">
                    Poster thể hiện rõ hai nguyên lý cơ bản:
                    <em> mối liên hệ phổ biến</em> (qua hình ảnh xích, bánh răng) và
                    <em> sự phát triển</em> (qua bậc thang phát sáng).
                  </p>
                  <p className="small mt-2">
                    Các quy luật cơ bản: quy luật lượng – chất, quy luật mâu thuẫn, quy luật phủ định của phủ định.
                  </p>
                </section>
              </div>
            </div>
          </div>

          {/* Right column: Mind Map */}
          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5 fw-bold">Mind Map — Tóm tắt ôn tập</h2>
                  <span className="text-muted small">Click để mở/đóng</span>
                </div>

                {renderAccordion(MIND_MAP.children)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
