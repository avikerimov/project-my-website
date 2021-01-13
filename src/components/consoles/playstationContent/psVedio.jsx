import React, { Component } from "react";
import {
  sonyPsSmallVideo,
  sonyPsMainVideo,
  sonyPsBGPVideo,
} from "../../../services/sonyPsService/psVideoService";

class PsVedio extends Component {
  state = {
    smallVideos: [],
    mainVideo: {},
    bgp:{}
  };
  componentDidMount() {
    this.setState({
      smallVideos: sonyPsSmallVideo(),
      mainVideo: sonyPsMainVideo(),
      bgp: sonyPsBGPVideo(),
    });
  }
  render() {
    const { smallVideos, mainVideo, bgp } = this.state;
    return (
      <React.Fragment>
        <hr className="my-5" />
        <div className="row">
          <div className="col">
            <h3 className="text-center mb-5" style={{ fontSize: "2.5em" }}>
              Play Has No Limits™
            </h3>
          </div>
        </div>
        <div
          style={{
            backgroundImage: bgp.bgpVideoUrl,
            backgroundRepeat: bgp.pgr,
            backgroundPosition: bgp.pgp,
            backgroundSize: bgp.pgs,
          }}
        >
          <div className="row pl-3 mb-5 pt-5 videoContainer">
            <div className="col text-center videoContainer">
              <iframe
                className="responsive-iframe pl-3"
                src={mainVideo.mainVideoUrl}
                frameBorder={mainVideo.frameBorder}
                allow={mainVideo.allow}
                allowFullScreen
                title={mainVideo.title}
              />
            </div>
          </div>
          {/* Small Videos */}
          <div className="row pb-4">
            {smallVideos.map((video) => (
              <div key={video.videoNum} className="col-6 col-lg-3 text-center ">
                <iframe
                  width={video.videoWidth}
                  height={video.videoHeight}
                  src={video.videoUrl}
                  frameBorder={video.frameBorder}
                  allow={video.allow}
                  allowFullScreen
                  title={video.title}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="row py-5"
          style={{            
            backgroundImage: 'linear-gradient( #f8f8f8, #f3f3f3)',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            width: "100%",
            marginLeft: "1px",
          }}
        >
          <div className="col-12">
            <p className="text-center">
              Experience lightning-fast loading with an ultra-high-speed SSD,
              deeper
              <br />
              immersion with support for haptic feedback, adaptive triggers and
              3D Audio,*
              <br />
              and an all-new generation of incredible PlayStation® games.
            </p>
          </div>
          <div className="col-12">
            <p className="text-center">*3D Audio with compatible headphones</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PsVedio;