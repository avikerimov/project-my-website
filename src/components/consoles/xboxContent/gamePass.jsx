import React, { Component } from "react";
import { Link } from "react-router-dom";

class GamePass extends Component {
  state = {
    
  };

  

  render() {
    
    return (
      <React.Fragment>
        <div
          className="text-center  img-fluid"
          style={{
            backgroundImage:
              "url('https://cdn.vox-cdn.com/thumbor/yDJZfybQ_O5tD-Vc5gPB7amzAyo=/0x0:2085x1040/1400x933/filters:focal(879x324:1211x656):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65363409/6Krbuy0.0.jpg')",
            backgroundRepeat: "no-repeat",
            // height: "700px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="mt-5"
            style={{
              paddingTop: "400px",
              color: "white",
              backgroundColor: "#00000040",
              paddingBottom: "100px",
            }}
          >
            <img
              src="https://compass-ssl.xbox.com/assets/94/53/9453f2c1-ad03-4c98-bea1-858afe487645.svg?n=10202018_Super-Hero-768_XGP-Logo-White-Stacked_162x79.svg"
              alt=""
              width="200"
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
