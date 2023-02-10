import React from "react";

const CommonInput: React.FC<{
  placeholder?: string;
  onChange?: () => void;
  type?: string;
  value?: string;
}> = ({ type, value }) => {
  return (
    <input
      placeholder="1..."
      type={type}
      value={value}
      className="block w-1/2 p-2 mb-1 text-gray-900 border bg-gray-50 border-gray-300 rounded-lg sm:text-md focus:border-gray-400"
    />
  );
};

export default CommonInput;
