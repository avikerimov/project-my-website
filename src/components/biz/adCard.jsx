import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/service/userService";

//Component that show the AD as card
class AdCard extends Component {
  state = {};
  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { ad, handleAdDelete, handleAdFavorite, isFavorite, favoriteTitle } = this.props;
    const { user } = this.state;
    return (
      <div className="card">
        {/* Product Image */}
        <img
          className="card-img-top"
          width="100"
          src={ad.productImg}
          alt={ad.productName}
        />
        <div className="card-body text-center">
          {/* Company Logo */}
          <img
            className="mx-auto"
            width="100"
            src={ad.companyLogo}
            alt={ad.companyName}
          />
          {/* Main AD details */}
          <h5 className="card-title">
            <b>{ad.productName}</b>
          </h5>
          <p className="card-text">{ad.productDescription}</p>
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
                <div className="">
                  <b>{favoriteTitle}</b>
                  <br />
                  <a
                    className="ml-1 text-warning"
                    href="/my-store"
                    onClick={(event) => handleAdFavorite(ad._id, event)}
                  >
                    <i className={isFavorite}></i>
                  </a>
                </div>
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
        {/* Footer of the AD */}
        <div className="card-footer p-0">
          <div className="row text-center">
            <div className="col-4">
              <small className="text-muted">
                <b>Card Number</b> <br /> {ad.bizNumber}
              </small>
            </div>
            <div className="col-4">
              <small className="text-muted">
                <b>Company</b> <br /> {ad.companyName}
              </small>
            </div>
            <div className="col-4">
              <small className="text-muted">
                <b>Created At</b> <br /> {ad.createdAt}
              </small>
            </div>
          </div>
        </div>

        {/* If BizUser show EDIT button */}
        {user && user.biz && (
          <div className="row">
            <div className="col-12 text-center">
              <b>Editor Tools</b>
              <i className="fas fa-briefcase ml-1"></i>
            </div>
            <div className="col-6">
              <Link
                className="btn btn-block btn-warning"
                to={`/my-ads/edit/${ad._id}`}
              >
                <i className="fas fa-edit pr-1"></i>
                Edit
              </Link>
            </div>
            <div className="col-6">
              <a
                className="btn btn-block btn-danger"
                href="/my-store"
                onClick={(event) => handleAdDelete(ad._id, event)}
              >
                <i className="far fa-times-circle"></i>
              </a>
            </div>
          </div>
        )}
        {/* -------------------------------- */}
      </div>
    );
  }
}

export default AdCard;
