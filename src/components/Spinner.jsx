import React from "react";
import window from "../assets/svg/window.svg";
export default function Spinner() {
  return (
    <div className="flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-51">
      <div>
        <img src={window} alt="loading" className="h-24" />
      </div>
    </div>
  );
}
