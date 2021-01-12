import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  gamepassIcon,
  gamepassBGP,
} from "../../../services/xboxService/gamepassService";

class GamePass extends Component {
  state = {
    icon: {},
    bgp: {},
  };

  componentDidMount() {
    this.setState({
      icon: gamepassIcon(),
      bgp: gamepassBGP(),
    });
  }

  render() {
    const { icon, bgp } = this.state;
    return (
      <React.Fragment>
        <div
          className="text-center  img-fluid"
          style={{
            backgroundImage:
              bgp.imgUrl,
            backgroundRepeat: bgp.bgr,
            backgroundPosition: bgp.bgp,
            backgroundSize: bgp.bgs,
          }}
        >
          <div className="mt-5 gamepass">
            <img
              src={icon.imgUrl}
              alt={icon.imgAlt}
              width={icon.imgWidth}
              className="pb-5"
            />
            <h3 style={{ fontWeight: "bolder", fontSize: "2.8em" }}>
              Discove your next favorite game
            </h3>
            <p className="pt-2" style={{ fontSize: "1.2em" }}>
              Play over 100 high-quality games for console, PC and compatible
              mobile devices,
              <br /> plus get all the benefits of Xbox Live Gold and EA Play.
            </p>
            <button type="button" className="infoBtn">
              <Link to="" className="btn btn-outline-light">
                <span>Learn More</span>
              </Link>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GamePass;
