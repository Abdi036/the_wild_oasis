import React from "react";

export default function Spinner({ text }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p className="font-semibold text-primary-200 mt-2">{text}</p>
    </div>
  );
}
