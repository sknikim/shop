import React, { useState } from "react";

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  background: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  minWidth: "300px",
  position: "relative",
};

function Modal({ onClose }) {
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("M");

  const handleConfirm = () => {
    alert(`색상: ${color}, 사이즈: ${size}`);
    onClose();
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h2>옵션 선택</h2>
        <div>
          <label>색상:</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="red">빨강</option>
            <option value="blue">파랑</option>
            <option value="black">검정</option>
          </select>
        </div>
        <br />
        <div>
          <label>사이즈:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <br />
        <button onClick={handleConfirm}>확인</button>
        <button onClick={onClose} style={{ marginLeft: "10px" }}>
          취소
        </button>
      </div>
    </div>
  );
}

export default Modal;
