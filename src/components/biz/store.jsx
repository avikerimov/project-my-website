import React, { Component } from "react";
import userService from "../../services/service/userService";
import Ad from "./ad";
import AdCard from "./adCard";
import HeaderH1 from "../common/header-h1";
import Swal from "sweetalert2";

class Store extends Component {
  state = {
    ads: [],
    favorites: [],
    searchValue: "",
    headerH1Data: {},
  };

  async componentDidMount() {
    const { data } = await userService.getAllAds();
    const favorites = await userService.getMyFavoriteAds();
    if (data.length > 0) {
      this.setState({
        ads: data,
        favorites: favorites.data,
      });
    }
    this.setState({
      headerH1Data: {
        color: "text-dark",
        bgColor: "bg-warning",
        titleLine1: "Enjoy exclusive deals",
        titleLine2: "from GadgetShop",
      },
    });
  }

  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleAdFavorite = async (adId, event) => {
    event.preventDefault();
    await userService.toggleFavoriteAd(adId);
    const serviceFavorites = await userService.getMyFavoriteAds();
    this.setState({ favorites: serviceFavorites.data });
    const {favorites} = this.state;
    favorites.map((fav) => {
      if(fav._id === adId){
        return Swal.fire({
          icon: "success",
          title: "This item has been added to your favorites",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        return Swal.fire({
          icon: "success",
          title: "This item has been removed from your favorites",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    
  };

  render() {
    const { headerH1Data, ads, favorites, searchValue } = this.state;

    const filteredData = ads.filter((ad) => {
      return Object.keys(ad).some((key) =>
        ad[key].toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
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
                isFavorite={
                  favorites.find((favorite) => favorite._id === ad._id)
                    ? "fas fa-star"
                    : "far fa-star"
                }
                favoriteTitle={"Add to Favorites"}
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
                  favorites.find((favorite) => favorite._id === ad._id)
                    ? "fas fa-star"
                    : "far fa-star"
                }
                favoriteTitle={"Add to Favorites"}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default Store;
