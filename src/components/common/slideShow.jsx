import React from "react";
import { Link } from "react-router-dom";

const SlideShow = ({pics4slideShow, arrowColor, mainColor}) => {
  
  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {pics4slideShow.map((pic) => (
            <li
              key={pic.picNum}
              data-target="#carouselExampleIndicators"
              data-slide-to={pic.picNum}
              className="active"
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {pics4slideShow.map((pic) => (
            <div
              key={pic.picNum}
              className={pic.active ? "carousel-item active" : "carousel-item"}
            >
              <img
                className="d-block w-100 "
                src={pic.imgUrl}
                alt={pic.imgAlt}
              />
              <div
                className="carousel-caption d-none d-md-block m-auto w-50"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.246)",
                  borderRadius: "10px",
                }}
              >
                <h3
                  style={{ color: `${pic.color}` }}
                  className={pic.colorClass}
                >
                  {pic.header3}
                </h3>
                <h5 className={pic.colorText ? pic.colorText : "text-white"}>
                  {pic.header5}
                </h5>
                <button
                  type="button"
                  className="infoBtn"
                  style={{ color: `${mainColor}` }}
                >
                  <Link
                    style={{ color: `${pic.color}` }}
                    to=""
                    className={pic.learnMoreColor ? pic.learnMoreColor : pic.colorClass}
                  >
                    <span>Learn More</span>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span>
            <i
              className={
                arrowColor
                  ? "fas fa-angle-left text-dark font-weight-bold"
                  : "fas fa-angle-left font-weight-bold"
              }
              aria-hidden="true"
              style={{ fontSize: "35px" }}
            ></i>
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span>
            <i
              className={
                arrowColor
                  ? "fas fa-angle-right text-dark font-weight-bold"
                  : "fas fa-angle-right font-weight-bold"
              }
              aria-hidden="true"
              style={{ fontSize: "35px" }}
            ></i>
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default SlideShow;
