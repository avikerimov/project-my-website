import React, { Component } from "react";
import { ssdIOicons } from "../../../services/sonyPsService/lightningSpeedService";

class LightningSpeed extends Component {
  state = { icons: [] };
  componentDidMount() {
    this.setState({
      icons: ssdIOicons(),
    });
  }
  render() {
    const { icons } = this.state;
    return (
      <div className="mt-5">
        <img
          className="d-block w-100"
          src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-family-image-block-01-en-16sep20?$1200px--t$"
          alt=""
        />
        <div className="row">
          <div className="col">
            <h3 className="text-center mb-3" style={{ fontSize: "2.5em" }}>
              Lightning speed
            </h3>
            <p
              className="text-center text-secondary "
              style={{ fontSize: "1.2em" }}
            >
              Harness the power of a custom CPU, GPU and SSD with Integrated I/O
              that rewrite the rules of
              <br />
              what a PlayStation console can do.
            </p>
          </div>
        </div>
        <div className="row text-center">
          {icons.map((icon) => (
            <div className='col-md-6 col-12'>
              <img className="w-50" src={icon.iconUrl} alt={icon.title} />
              <h4>{icon.title}</h4>
              <p>{icon.txt}</p>
            </div>
          ))}          
        </div>
      </div>
    );
  }
}

export default LightningSpeed;
