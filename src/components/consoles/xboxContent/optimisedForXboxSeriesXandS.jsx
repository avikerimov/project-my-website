import React, { Component } from 'react';
import { optimisedForXboxOptions } from '../../../services/xboxService/xboxOptimisedForXboxOptions';
import { optimisedForXboxPicContent } from '../../../services/xboxService/xboxOptimisedForXboxPicContent';

class OptimisedForXbox extends Component {
  state = {
    xboxPicContent: {},
    xboxOptions: [],
  };

  componentDidMount(){
      this.setState({xboxOptions: optimisedForXboxOptions(), xboxPicContent: optimisedForXboxPicContent()});
  }

  render() {
    const { xboxPicContent, xboxOptions } = this.state;
    return (
      <React.Fragment>
        <div
          className="text-center  img-fluid"
          style={{
            backgroundImage:
              "url('https://assets1.ignimgs.com/2017/11/22/monsterhunterworld-3-1280-1511353963675.jpg')",
            backgroundRepeat: "no-repeat",
            height: "700px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img
            src={xboxPicContent.imgUrl}
            alt={xboxPicContent.imgAlt}
            style={{
              width: "25%",
              paddingTop: "450px",
            }}
          />
          <h2
            className="font-weight-bold text-white"
            style={{ fontSize: "3em" }}
          >
            {xboxPicContent.imgHeader1}
            <br />
            {xboxPicContent.imgHeader2}
          </h2>
        </div>
        <div style={{ backgroundColor: "#e6e6e6" }}>
          <p className="text-center font-weight-bold">
            {xboxPicContent.imgParagraph1}
            <br />
            {xboxPicContent.imgParagraph2}
          </p>
          <div className="row">
            {xboxOptions.map((option) => (
              <div key={option.imgNum} className="col-12 col-md-6 col-lg-3 text-center">
                <img
                  src={option.imgUrl}
                  alt={option.imgAlt}
                  style={{ width: `${option.imgWidth}` }}
                />
                <div className="row mt-5">
                  <div className="col-12">
                    <h4 className="text-center">{option.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default OptimisedForXbox;