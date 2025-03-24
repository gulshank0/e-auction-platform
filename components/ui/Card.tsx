import React from "react";

function Card(props: any) {
  return (
    <div>
      <div className="bg-gradient-to-br from-cyan-400 to-gray-950 transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 
 rounded-4xl p-10 py-35 text-center cursor-pointer m-5 ">
        {props.title}
      </div>
    </div>
  );
}

export default Card;
