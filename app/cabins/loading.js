import React from "react";
import Spinner from "../_components/Spinner";

export default function loading() {
  const text = "Loading cabin details...";
  return (
    <div className="grid items-center justify-center">
      <Spinner text={text} />
    </div>
  );
}
