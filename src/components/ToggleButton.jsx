import React, { useState } from "react";
import { useToggle } from "../hooks/useToggle";

const ToggleButton = () => {
  const { theme, toggle } = useToggle();

  return (
    <button
      style={{
        margin: "20px",
        background: `${theme === "light" ? "#FFF" : "#000"}`,
        color: `${theme !== "light" ? "#FFF" : "#000"}`,
        width: "80px",
        height: "30px",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "16px",
        border: "1px solid #000",
        borderRadius: "8px",
      }}
      onClick={toggle}
    >
      Theme
    </button>
  );
};

export default ToggleButton;
