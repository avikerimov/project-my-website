import React, { Component } from "react";
import {
  stunningGamesBGP,
  contentStyle,
  stunningGamesContent,
} from "../../../services/sonyPsService/stunningGames";

class StunningGames extends Component {
  state = {
    bgp: {},
    contentStyle: {},
    content: [],
  };
  componentDidMount() {
    this.setState({
      bgp: stunningGamesBGP(),
      contentStyle: contentStyle(),
      content: stunningGamesContent(),
    });
  }
  render() {
    const { bgp, content, contentStyle } = this.state;
    return (
      <div
        className="text-center text-light mt-5"
        style={{
          backgroundImage: bgp.imgUrl,
          backgroundRepeat: bgp.pgr,
          backgroundPosition: bgp.pgp,
          backgroundSize: bgp.pgs,
        }}
      >
        <div
          style={{
            backgroundColor: "#00000060",
          }}
        >
          <div className="row">
            <div className="col-12 my-4">
              <h3 style={{ fontSize: "2.5em" }}>Stunning games</h3>
              <p className="font-weight-bold">
                Marvel at incredible graphics and experience new PS5 features.{" "}
              </p>
            </div>
          </div>
          {content.map((value) => (
            <div key={value.contentNum} className="row mb-3">
              <div className={contentStyle.classMediumR}>
                <img
                  className={contentStyle.iconWidth}
                  src={value.iconUrl}
                  alt={value.title}
                />
              </div>
              <div className={contentStyle.classMediumL}>
                <h5 className="mt-3">{value.title}</h5>
                <p className="mt-3">{value.txt}</p>
              </div>
              <div className={contentStyle.classSmall}>
                <img
                  className={contentStyle.iconWidth}
                  src={value.iconUrl}
                  alt={value.title}
                />
              </div>
              <div className={contentStyle.classSmall}>
                <h5>{value.title}</h5>
                <p>{value.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StunningGames;
