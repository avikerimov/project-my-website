import React, { Component } from "react";
import {
  ps5Console,
  consolesNames,
  ps5DigitalEditionFeatures,
  ps5DE,
} from "../../../services/sonyPsService/ps5Consoles";

class ps5ConsoleTitles extends Component {
  state = {
    ps5Console: [],
    ps5ConsoleText: [],
    consolesNames: {},
    ps5DE: [],
  };

  componentDidMount() {
    this.setState({
      ps5Console: ps5Console(),
      consolesNames: consolesNames(),
      ps5DE: ps5DE(),
    });
  }

  render() {
    const { ps5Console, consolesNames, ps5DE } = this.state;

    return (
      <div className="mt-5">
        <h3 className="text-center mb-5" style={{ fontSize: "2.5em" }}>
          Choose a console edition <br /> to learn more
        </h3>
        <ul
          className="nav nav-pills justify-content-center mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="ps5-consoles-tab"
              data-toggle="pill"
              href="#ps5-consoles"
              role="tab"
              aria-controls="ps5-consoles"
              aria-selected="true"
            >
              {consolesNames.consoleTitle}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="ps5-digital-edition-tab"
              data-toggle="pill"
              href="#ps5-digital-edition"
              role="tab"
              aria-controls="ps5-digital-edition"
              aria-selected="false"
            >
              {consolesNames.deTitle}
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="ps5-consoles"
            role="tabpanel"
            aria-labelledby="ps5-consoles-tab"
          >
            <div className="row">
              <div className="col-md-6 col-12">
                <h3 className="my-5 text-secondary">
                  More {consolesNames.consoleTitle} features
                </h3>
                <div className="d-block d-md-none col-12 mb-5">
                  <img
                    src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$1600px--t$"
                    alt=""
                    style={{ width: "30em" }}
                  />
                </div>
                {ps5Console.map((console) => (
                  <div className="row mb-3">
                    <div className="col-12">
                      <h5>{console.title}</h5>
                      <p>{console.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-none d-md-block col-6">
                <img
                  src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$1600px--t$"
                  alt=""
                  style={{ width: "30em" }}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ps5-digital-edition"
            role="tabpanel"
            aria-labelledby="ps5-digital-edition-tab"
          >
            <div className="row">
              <div className="d-none d-md-block col-6">
                <img
                  src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$1600px--t$"
                  alt=""
                  style={{ width: "30em" }}
                />
              </div>
              <div className="col-md-6 col-12">
                <h3 className="my-5 text-secondary">More {consolesNames.deTitle} features</h3>
                <div className="d-block d-md-none col-12 mb-5">
                  <img
                    src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$1600px--t$"
                    alt=""
                    style={{ width: "30em" }}
                  />
                </div>
                {ps5DE.map((console) => (
                  <div className="row mb-3">
                    <div className="col-12">
                      <h5>{console.title}</h5>
                      <p>{console.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ps5ConsoleTitles;
