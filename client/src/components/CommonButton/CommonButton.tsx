import React from "react";

const CommonButton: React.FC<{
  label?: string;
  onClick?: () => void;
  typeBtn?: string;
}> = ({ label, typeBtn }) => {
  return (
    <button
      className={`block px-7 py-3  rounded-lg ${
        typeBtn === "create" ? "bg-blue-600" : "bg-red-600"
      } `}
    >
      {label}
    </button>
  );
};

export default CommonButton;
