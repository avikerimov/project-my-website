import React, { Component } from "react";

class PlayMoreWaitLess extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-md-7 col-lg-8">
            <div
              className="text-center  img-fluid"
              style={{
                backgroundImage:
                  "url('https://cdn.mos.cms.futurecdn.net/m7Dnt3K4RYepQuTMHM8quG.jpg')",
                backgroundRepeat: "no-repeat",
                height: "525px",
                backgroundPosition: "right",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="border mt-2 p-2 mb-2"
              style={{
                backgroundImage:
                  "linear-gradient(#00000080, #00000060, #00000040, #00000020)",
              }}
            ></div>
            -
          </div>
          <div className="col mt-2-xs justify-content-sm-center align-self-md-center">
            <h3>Play more, wait less</h3>
            <p>
              A streamlined dashboard designed to get you into the games and
              entertainment you love quickly.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PlayMoreWaitLess;
