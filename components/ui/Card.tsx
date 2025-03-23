import { title } from "process";
import React from "react";

function Card(props) {
  return (
    <div>
      <div className="bg-gradient-to-br from-cyan-400 to-gray-9500 shadow-2xl rounded-2xl p-10 py-35 text-center cursor-pointer m-7 ">
        {props.title}
      </div>
    </div>
  );
}

export default Card;
