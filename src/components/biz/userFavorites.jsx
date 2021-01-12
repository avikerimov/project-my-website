import React, { Component } from "react";
import Ad from "./ad";
import userService from "../../services/service/userService";
import AdCard from "./adCard";
import HeaderH1 from "../common/header-h1";
import Swal from "sweetalert2";

class UserFavorites extends Component {
  state = {
    ads: [],
    searchValue: "",
    headerH1Data: {},
  };

  async componentDidMount() {
    const { data } = await userService.getMyFavoriteAds();
    if (data.length > 0) {
      this.setState({
        ads: data,
      });
    }
    this.setState({
      headerH1Data: {
        color: "text-dark",
        bgColor: "bg-dark",
        titleLine1: "Get more customers with",
        titleLine2: "GadgetShop",
      },
    });
  }

  handleAdFavorite = async (adId, event) => {
    event.preventDefault();
    await userService.toggleFavoriteAd(adId);
    const favorites = await userService.getMyFavoriteAds();
    this.setState({ ads: favorites.data });
    Swal.fire({
      icon: "success",
      title: "This item has been removed from your favorites",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const { headerH1Data, ads, searchValue } = this.state;

    const filteredData = ads.filter((ad) => {
      return Object.keys(ad).some((key) =>
        ad[key].toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
        {/* <p className="m1-3 text-info text-center">
          <b>Create, Manage and Edit your ad's</b>
        </p> */}
        <div className="col text-right">
          <i className="fas fa-search mr-2"></i>
          <input
            className="mb-3"
            value={searchValue}
            onChange={this.handleSearch}
            placeholder="Type for fast Search.."
          />
        </div>

        {ads.length > 0 &&
          filteredData.map((ad) => (
            <div key={ad._id} className="w-100 mb-5 d-none d-lg-block">
              <Ad
                key={ad._id}
                ad={ad}
                handleAdFavorite={this.handleAdFavorite}
                isFavorite={ad ? "fas fa-trash-alt text-danger" : "far fa-star"}
                favoriteTitle={"Remove from Favorites"}
              />
            </div>
          ))}

        {ads.length > 0 &&
          filteredData.map((ad) => (
            <div key={ad._id} className="mb-5 d-block d-lg-none">
              <AdCard
                key={ad._id}
                ad={ad}
                handleAdFavorite={this.handleAdFavorite}
                isFavorite={
                  ad ? "fas fa-trash-alt text-danger" : "far fa-star "
                }
                favoriteTitle={"Remove from Favorites"}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default UserFavorites;
