import React, { Component } from "react";
import { sonyPsPictures } from "../../services/sonyPsService/sonyPsService";
import { sonyPsHeader } from "../../services/sonyPsService/sonyPsHeaderService";
import HeaderH1 from "../common/header-h1";
import SlideShow from "../common/slideShow";
import PsVedio from "./playstationContent/psVedio";
import LightningSpeed from "./playstationContent/lightningSpeed";

class Playstation extends Component {
  state = {
    pics4slideShow: [],
    arrowColor: "",
    headerH1Data: {},
  };

  componentDidMount() {
    this.setState({
      pics4slideShow: sonyPsPictures(),
      arrowColor: "text-dark",
      headerH1Data: sonyPsHeader(),
    });
  }
  render() {
    const { pics4slideShow, arrowColor, headerH1Data } = this.state;
    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
        <SlideShow pics4slideShow={pics4slideShow} arrowColor={arrowColor} />
        <PsVedio />
        <LightningSpeed />
      </div>
    );
  }
}

export default Playstation;
