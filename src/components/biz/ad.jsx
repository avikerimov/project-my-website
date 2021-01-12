import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/service/userService";

class Ad extends Component {
  state = {};
  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { ad, handleAdDelete, handleAdFavorite, isFavorite, favoriteTitle } = this.props;
    const { user } = this.state;
    return (
      <React.Fragment>
        <div className="row border text-center">
          <div className="col-4  border-right">
            <div className="row">
              <div className="col-12">
                <img
                  className=""
                  style={{ maxHeight: 180, maxWidth: 300 }}
                  src={ad.productImg}
                  alt={ad.productName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <img
                  className=""
                  width="100"
                  src={ad.companyLogo}
                  alt={ad.companyName}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <h4>
              <b>{ad.productName}</b>
            </h4>
            <p>{ad.productDescription}</p>
            <div className="row border-top">
              <div className="col-6">
                <b>Phone Number</b>
                <br />
                <i className="fas fa-phone-alt mr-2"></i>
                {ad.storePhone}
              </div>

              <div className="col-6">
                <b>Price</b>
                <br />
                <i className="fas fa-tag mr-2"></i>
                &#8362;{ad.productPrice}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <b>Store Location</b>
                <br />
                <i className="fas fa-map-marker-alt mr-2"></i>
                {ad.storeAddress}
              </div>
              <div className="col-6">
                {/* If User show (Star) Favorite button */}
                {user && !user.biz && (
                  <React.Fragment>
                    <b>{favoriteTitle}</b>
                    <br />
                    <a
                      className="ml-1 text-warning"
                      href="/my-store"
                      onClick={(event) => handleAdFavorite(ad._id, event)}
                    >
                      <i className={isFavorite}></i>
                    </a>
                  </React.Fragment>
                )}
                {/* -------------------------------- */}
                {/* BizUser show (Star) Favorite button */}
                {user && user.biz && (
                  <div className=" text-muted">
                    <b>Add to Favorites</b>
                    <br />
                    <i className="far fa-star"></i>
                  </div>
                )}
                {/* -------------------------------- */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border text-center"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="col-4">
            <small className="text-muted">
              <b>Company:</b> {ad.companyName}
            </small>
          </div>
          <div className="col-4">
            <small className="text-muted">
              <b>Card Number:</b> {ad.bizNumber}
            </small>
          </div>
          <div className="col-4">
            <small className="text-muted">
              <b>Created At:</b> {ad.createdAt}
            </small>
          </div>
        </div>

        {/* If BizUser show EDIT button */}
        {user && user.biz && (
          <div className="row border" style={{ backgroundColor: "#f1f1f1" }}>
            <div className="col-4 border-right text-center">
              <b>Editor Tools</b>
              <i className="fas fa-briefcase ml-1"></i>
            </div>
            <div className="col-4">
              <Link
                className="btn btn-block btn-warning py-0"
                to={`/my-ads/edit/${ad._id}`}
              >
                <i className="fas fa-edit pr-1"></i>
                Edit
              </Link>
            </div>
            <div className="col-4">
              <a
                className="btn btn-block btn-danger py-0"
                href="/my-store"
                onClick={(event) => handleAdDelete(ad._id, event)}
              >
                <i className="far fa-times-circle pr-1"></i>
                Delete
              </a>
            </div>
          </div>
        )}
        {/* -------------------------------- */}
      </React.Fragment>
    );
  }
}

export default Ad;
