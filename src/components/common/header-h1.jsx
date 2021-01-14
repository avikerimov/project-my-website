import React from "react";

//component that sets the main header of every page
const HeaderH1 = ({ headerH1Data }) => {
  return (
    <div className="text-center">
      <h1
        //color of the header
        className={headerH1Data.color}
        style={{ fontSize: "4em", fontWeight: "bolder" }}
      >
        {/* Text of the Header */}
        {headerH1Data.titleLine1}
        <br />
        {/* OPTION: breakline for the Header to be at two lines */}
        {headerH1Data.titleLine2}
        <div className="w-50 m-auto">
          <hr className={headerH1Data.bgColor} />
        </div>
      </h1>
    </div>
  );
};

export default HeaderH1;
