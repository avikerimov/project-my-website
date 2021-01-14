import React, { Component } from "react";
import adService from "../../services/service/adService";
import Ad from "./ad";
import Swal from "sweetalert2";

//Component that handel only about the Delete Button
class BizAds extends Component {
  state = {
    ads: [],
  };

  async componentDidMount() {
    const { data } = await adService.getMyAds();
    if (data.length > 0) this.setState({ ads: data });
  }

  /* Function Delete: popup SWAL notfiction that asks if you sure about deleting this AD
  if Yes popup SWAL notfiction that it was deleted successfully
  if not popup SWAL notfiction that it wasn't deleted */
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
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          mySwal.fire("Cancelled", "Your ad is safe :)", "error");
        }
      });
  };

  /* ------------------------------------------------------------------------ */

  render() {
    const { ads } = this.state;
    return (
      <React.Fragment>
        <div className="card-group d-md-none">
          {ads.length > 0 &&
            ads.map((ad) => (
              <div className="col-md-6 mb-5 min-hight">
                <Ad key={ad._id} ad={ad} handleAdDelete={this.handleAdDelete} />
              </div>
            ))}
        </div>
        <div className="card-columns d-lg-block">
          {ads.length > 0 &&
            ads.map((ad) => (
              <Ad key={ad._id} ad={ad} handleAdDelete={this.handleAdDelete} />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default BizAds;
