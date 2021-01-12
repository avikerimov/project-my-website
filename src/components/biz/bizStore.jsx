import React, { Component } from "react";
import HeaderH1 from "../common/header-h1";
import adService from "../../services/service/adService";
import AdCard from "./adCard";
import Ad from "./ad";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

class BizStore extends Component {
  state = {
    ads: [],
    headerH1Data: {},
    searchValue: "",
  };

  async componentDidMount() {
    const { data } = await adService.getMyAds();
    // console.log(data);
    if (data.length > 0) this.setState({ ads: data });

    this.setState({
      headerH1Data: {
        color: "text-dark",
        bgColor: "bg-dark",
        titleLine1: "Get more customers with",
        titleLine2: "GadgetShop",
      },
    });
  }

  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleAdDelete = async (adId, event) => {
    event.preventDefault();
    const mySwal = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    mySwal
      .fire({
        title: "Are you sure you want to delete that?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          let ads = [...this.state.ads];
          ads = ads.filter((ad) => ad._id !== adId);
          this.setState({ ads });
          await adService.deleteAd(adId);
          mySwal.fire("Deleted!", "Your ad has been deleted.", "success");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          mySwal.fire("Cancelled", "Your ad is safe :)", "error");
        }
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

        <p className="m1-3 text-info text-center">
          <b>Create, Manage and Edit your ad's</b>
        </p>
        <div className="row">
          <div className="col text-left">
            <Link to="/create-ad" className="btn btn-primary">
              <i className="fas fa-plus-circle pr-2"></i>
              Publish New Ad
            </Link>
          </div>

          <div className="col text-right">
            <i className="fas fa-search mr-2"></i>
            <input
              className="mb-3 w-50"
              value={searchValue}
              onChange={this.handleSearch}
              placeholder="Type for fast Search.."
            />
          </div>
        </div>

        {ads.length > 0 &&
          filteredData.map((ad) => (
            <div key={ad._id} className="w-100 mb-5 d-none d-lg-block">
              <Ad key={ad._id} ad={ad} handleAdDelete={this.handleAdDelete} />
            </div>
          ))}

        {ads.length > 0 &&
          filteredData.map((ad) => (
            <div key={ad._id} className="mb-5 d-block d-lg-none">
              <AdCard
                key={ad._id}
                ad={ad}
                handleAdDelete={this.handleAdDelete}
              />
            </div>
          ))}

        {/* <BizAds /> */}
      </div>
    );
  }
}

export default BizStore;
