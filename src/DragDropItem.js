import React from "react";
import { useDrag } from "react-dnd";

export default function DragDropItem({ text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ANSWER",
    item: { text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="badge bg-secondary text-wrap mb-2 me-2"
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "grab" }}
    >
      {text}
    </div>
  );
}
