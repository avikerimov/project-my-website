import React from "react";

const HeaderH1 = ({ headerH1Data }) => {
  return (
    <div className="text-center">
      <h1
        className={headerH1Data.color}
        style={{ fontSize: "4em", fontWeight: "bolder" }}
      >
        {headerH1Data.titleLine1}
        <br />
        {headerH1Data.titleLine2}
        <div className="w-50 m-auto">
          <hr className={headerH1Data.bgColor} />
        </div>
      </h1>
    </div>
  );
};

export default HeaderH1;
