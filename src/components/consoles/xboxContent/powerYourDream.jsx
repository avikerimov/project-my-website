import React, { Component } from "react";
import {
  xboxPowerYourDream,
  xboxPowerYourDreamBGP,
} from "../../../services/xboxService/powerYourDreamService";

class PowerYourDream extends Component {
  state = {
    powerYouDremContent: [],
    bgp: {},
  };

  componentDidMount() {
    this.setState({
      powerYouDremContent: xboxPowerYourDream(),
      bgp: xboxPowerYourDreamBGP(),
    });
  }

  render() {
    const { powerYouDremContent, bgp } = this.state;
    return (
      <React.Fragment>
        <div className="m-5 w-50 mx-auto border-bottom border-success ">
          <h2
            className="text-center font-weight-bold rounded "
            style={{ fontSize: "3em", color: "" }}
          >
            Power Your Dream
          </h2>
        </div>
        <div
          className="text-center  img-fluid"
          style={{
            backgroundImage: bgp.imgUrl,
            backgroundRepeat: bgp.bgr,
            backgroundPosition: bgp.bgp,
            backgroundSize: bgp.bgs,
          }}
        >
          <div className="pt-5">
            {powerYouDremContent.map((content) => (
              <div
                key={content.imgNum}
                className="row justify-content-md-left pl-2 pb-5"
              >
                <div
                  className="col-12 col-md-3 p-3"
                  style={{ backgroundColor: "#ffffff60" }}
                >
                  <img
                    src={content.imgUrl}
                    alt={content.imgAlt}
                    style={{ width: "50%" }}
                  />
                </div>
                <div
                  className="col col-lg-5"
                  style={{ backgroundColor: "#ffffff60" }}
                >
                  <h3
                    className="font-weight-bold"
                    style={{ fontSize: "2em", color: "" }}
                  >
                    {content.headerH3}
                  </h3>
                  <p className="font-weight-bold">{content.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PowerYourDream;
