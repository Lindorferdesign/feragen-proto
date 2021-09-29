import React from "react";

export default function RbCardOverview() {
  return (
    <div>
      <div className="card-rasse p-5 border border-gray-200 rounded hover:shadow-xl hover:cursor-pointer transition-all duration-300 hover:border-white">
        <div className="dog-breed-info flex flex-row items-center mb-4">
          <div className="card-rasse-img w-16 h-16 rounded-full bg-indigo-600 mr-4">
            <img className="" src=""></img>
          </div>
          <div className="card-rasse-titl font-semibold text-xl">
            Labrador Retriver
          </div>
          <div className="percent-value ml-auto font-bold text-4xl">32 %</div>
        </div>
        <div className="dog-breed-percentage h-4 rounded-full bg-gray-100 relative">
          <div className="dog-breed-percentage-fill absolute left-0 bg-indigo-600 h-4 w-3/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
