import React, { Component } from "react";
import SlideShow from "../common/slideShow";
import { nintendoPictures } from "../../services/nintendoService/nintendoService";
import { nintendoHeader } from "../../services/nintendoService/nintendoHeaderService";
import HeaderH1 from "../common/header-h1";

class Nintendo extends Component {
  state = {
    pics4slideShow: [],
    headerH1Data: {},
  };

  componentDidMount() {
    this.setState({
      pics4slideShow: nintendoPictures(),
      headerH1Data: nintendoHeader(),
    });
  }
  render() {
    const { pics4slideShow, headerH1Data } = this.state;
    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
        <SlideShow pics4slideShow={pics4slideShow} />
      </div>
    );
  }
}

export default Nintendo;
