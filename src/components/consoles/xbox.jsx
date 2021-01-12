import React, { Component } from "react";
import { xboxPictures } from "../../services/xboxService/xboxService";
import { xboxHeader } from "../../services/xboxService/xboxHeaderService";
import HeaderH1 from "../common/header-h1";
import SlideShow from "../common/slideShow";
import PowerYourDream from "./xboxContent/powerYourDream";
import OptimisedForXbox from "./xboxContent/optimisedForXboxSeriesXandS";
import Nav from "../nav";
import GamePass from "./xboxContent/gamePass";
import PlayMoreWaitLess from "./xboxContent/playMoreWaitLess";

class Xbox extends Component {
  state = {
    pics4slideShow: [],
    arrowColor: "",
    headerH1Data: {},
    xboxColor: "",
  };

  componentDidMount() {
    this.setState({
      pics4slideShow: xboxPictures(),
      arrowColor: "text-dark",
      headerH1Data: xboxHeader(),
      xboxColor: "green",
    });
  }

  render() {
    const { pics4slideShow, arrowColor, headerH1Data, xboxColor } = this.state;
    return (      
        <div className="container mt-2">
          <HeaderH1 headerH1Data={headerH1Data} />
          <Nav
            title1="Xbox Series X"
            title2="Xbox Game Pass"
            title3="Xbox Series S"
            nav1=""
            nav2="#id3"
            nav3=""
            myid1="my-id1"
            navColor="btn-success"
          />
          <SlideShow
            pics4slideShow={pics4slideShow}
            arrowColor={arrowColor}
            mainColor={xboxColor}
          />
          <PowerYourDream />
          <OptimisedForXbox />
          <GamePass />
          <PlayMoreWaitLess />
        </div>      
    );
  }
}

export default Xbox;
