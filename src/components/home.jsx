import React, { Component } from 'react';
import SlideShow from './common/slideShow';
import { homeSlideShow } from "../services/homeService/slideShow";
// import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    pics4slideShow: [],
    arrowColor: "",
  };

  componentDidMount() {
    this.setState({
      pics4slideShow: homeSlideShow(),
      arrowColor: "text-dark",
    });
  }

  render() {
    const { pics4slideShow, arrowColor } = this.state;
    return (
      <div className="container">
        <SlideShow pics4slideShow={pics4slideShow} arrowColor={arrowColor} />
        <div className="row d-flex justify-content-center">
          <div
            className="col-md-5 col-12 border border-warning m-4 mt-5 p-0 d-flex align-items-center justify-content-center btn"
            style={{
              backgroundImage:
                "url('https://www.gamespace.com/wp-content/uploads/2019/11/Gaming-Consoles.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className="col-12 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#d10c3d4d",
                height: "10em",
                backgroundSize: "cover",
              }}
            >
              <h3 className="display-3 text-light">Consoles</h3>
            </div>
          </div>
          <div
            className="col-md-5 col-12 border border-warning m-4 mt-5 p-0 d-flex align-items-center justify-content-center btn"
            style={{
              backgroundImage:
                "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-cameraphones-1585581348.jpg?crop=0.752xw:1.00xh;0.163xw,0&resize=640:*')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className="col-12 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#0c19d14d",
                height: "10em",
                backgroundSize: "cover",
              }}
            >
              <h3 className="display-3 text-light">Phones</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;