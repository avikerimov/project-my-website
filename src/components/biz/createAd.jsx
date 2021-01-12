import Joi from "joi-browser";
import React from "react";
import { Link } from "react-router-dom";
import Form from "../common/form";
import userService from "../../services/service/userService";
import adService from "../../services/service/adService";
import { toast } from "react-toastify";
import HeaderH1 from "../common/header-h1";


class CreateAd extends Form {
  state = {
    data: {
      companyName: "",
      productName: "",
      productDescription: "",
      productPrice: "",
      storeAddress: "",
      storePhone: "",
      companyLogo: "",
      productImg: "",
    },
    errors: {},
    headerH1Data: {}
  };

  schema = {
    // _id: Joi.string(),
    companyName: Joi.string().min(2).max(255).required(),
    productName: Joi.string().min(2).max(255).required(),
    productDescription: Joi.string().min(2).max(1024).required(),
    productPrice: Joi.number().positive().greater(1).precision(2).required(),
    storeAddress: Joi.string().min(2).max(400).required(),
    storePhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    companyLogo: Joi.string().min(11).max(1024),
    productImg: Joi.string().min(11).max(1024),
  };

  async componentDidMount() {
    const data = userService.getCurrentUser();
    this.setState({
      data: this.mapToViewModel(data),
      headerH1Data: {
        color: "text-dark",
        bgColor: "bg-dark",
        titleLine1: "The easiest way",
        titleLine2: "to menage your marketing",
      },
    });
  }

  mapToViewModel(data) {
    return {
      // _id: data._id,
      companyName: data.companyName,
      storePhone: data.phoneNumber,
      companyLogo: data.companyLogo,
      productName: "",
      productDescription: "",
      productPrice: "",
      storeAddress: "",
      productImg: "",
    };
  }

  doSubmit = async () => {
    const data = { ...this.state.data };
    // if (!data.bizImage) delete data.bizImage;
    await adService.createAd(data);
    toast("Your ad has been created");
    this.props.history.replace("/my-store");
  };

  render() {
    const { headerH1Data } = this.state;
    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
        <div className="row">
          <div className="col-12">
            <p className="text-center text-info">
              <b>
                With GadgetShop Ads you can reach more relevant customers for
                your buisness.
              </b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link className="btn btn-secondary" to="/my-store">
              <i className="fas fa-arrow-circle-left pr-2"></i>
              Back
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            {
              <form
                onSubmit={this.handleSubmit}
                autoComplete="off"
                method="POST"
              >
                {this.renderInput("companyName", "Company Name")}
                {this.renderInput("productName", "Product Name")}
                {this.renderInput("productDescription", "Product Description")}
                {this.renderInput("productPrice", "Product Price")}
                {this.renderInput("storeAddress", "Store Address")}
                {this.renderInput("storePhone", "Store Phone")}
                {this.renderInput("companyLogo", "Company Logo")}
                {this.renderInput("productImg", "Product Img")}
                {this.renderButton("Create Ad", "fas fa-vote-yea", "btn-primary")}
              </form>
            }
          </div>
          <div className="col align-self-center d-none d-lg-block">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/24/13/00/white-male-1856173_960_720.jpg"
              alt=""
              width="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAd;
