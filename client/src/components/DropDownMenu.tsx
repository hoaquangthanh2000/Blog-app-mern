import React, { useState } from "react";

export default function DropDownMenu() {
  const [check, setCheck] = useState<boolean>(false);
  const dropOption = () => {
    setCheck(!check);
  };
  return (
    <>
      <button
        id="dropdownMenuIconButton"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        onClick={dropOption}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
        </svg>
      </button>

      <div
        id="dropdownDots"
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute ${
          check ? "block" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li className="cursor-pointer hover:bg-slate-100">Dashboard</li>
          <li className="cursor-pointer hover:bg-slate-100">Settings</li>
          <li className="cursor-pointer hover:bg-slate-100">Earnings</li>
        </ul>
      </div>
    </>
  );
}
