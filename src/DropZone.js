import React from "react";
import { useDrop } from "react-dnd";

export default function DropZone({ title, onDrop, acceptedAnswers, children, onRemove }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ANSWER",
    drop: (item) => onDrop(item.text),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`border rounded p-3 mb-3 ${
        isOver ? "bg-light border-primary" : "bg-white"
      }`}
    >
      <h6 className="fw-bold mb-2">{title}</h6>
      <div className="small text-muted mb-2">Kéo đáp án đúng vào đây</div>
      <div>{children}</div>
      {acceptedAnswers.length > 0 && (
        <ul className="mt-2 small">
  {acceptedAnswers.map((ans, idx) => (
    <li key={idx} className="d-flex justify-content-between align-items-center">
      {ans}
      <button
        className="btn btn-sm btn-link text-danger"
        onClick={() => onRemove(ans.replace(/^✅ |^❌ /, ""))}
      >
        ❌
      </button>
    </li>
  ))}
</ul>
      )}
    </div>
  );
}
