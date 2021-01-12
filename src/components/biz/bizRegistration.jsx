import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { apiUrl } from "../../config.json";
import { toast } from "react-toastify";
import userService from "../../services/service/userService";
import { Link, Redirect } from "react-router-dom";
import HeaderH1 from "../common/header-h1";
import http from "../../services/service/httpService";

class BizRegistration extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      companyName: "",
      phoneNumber: "",
      companyLogo: "",
    },
    errors: {},
    headerH1Data: {}
  };

  componentDidMount(){
    this.setState({
      headerH1Data: {
        color: "text-info",
        bgColor: "bg-info",
        titleLine1: "Business Client",
      },
    });
  }

  schema = {
    name: Joi.string().required().min(2).label("Business Client Name"),
    email: Joi.string().required().email().label("Business Client Email"),
    password: Joi.string().required().min(6).label("Business Client Password"),
    companyName: Joi.string().required().min(2).label("Business Company Name"),
    phoneNumber: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Business Client/Company Phone Number"),
    companyLogo: Joi.string()
      .min(11)
      .max(1024)
      .uri()
      .allow("")
      .label("Business Image URL"),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    data.biz = true;

    try {
      await http.post(`${apiUrl}/biz-users`, data);
      toast("Your Business Account has been created successfuly");
      this.props.history.replace("/biz-login");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({
          errors: { email: ex.response.data },
        });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;
    const { headerH1Data } = this.state;
    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
        <div className="row">
          <div className="col-lg-6 text-center border-right d-none d-lg-block">
            <h3>Alredy have Business Account?</h3>
            <p>
              Start managing your Business Profile on <b>GadgetyShop</b>.
            </p>
            <Link to="/biz-login" className="btn btn-info text-dark mt-3">
              <b>Connect with Business Account</b>
              <i className="pl-2 fas fa-user-tie"></i>
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <h3>Business Registration</h3>
            <p>
              Your free Business Profile lets you easily connect with customers
              across <b>GadgetShop Store</b>.
              <br />
              Post offers to your profile to show what makes
              <br />
              your business unique, and give customers reasons
              <br />
              to choose you every time.
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-center border-right d-none d-lg-block">
            <img
              src="https://akilisystems.in/images/_ecommerce_1.jpg"
              alt=""
              width="300"
            />
          </div>
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("name", "Business Client Name")}
              {this.renderInput("email", "Business Client Email", "email")}
              {this.renderInput(
                "password",
                "Business Client Password",
                "password"
              )}
              {this.renderInput("companyName", "Business Company Name")}
              {this.renderInput(
                "phoneNumber",
                "Business Client/Company Phone Number"
              )}
              {this.renderInput("companyLogo", "Business Image URL")}
              {this.renderButton("Register", "fas fa-file-signature", "btn-primary")}
            </form>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col">
            <hr className="mb-5 mt-5" />
            <h3>Alredy have Business Account?</h3>
            <p>
              Start managing your Business Profile on <b>GadgetyShop</b>.
            </p>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col-6">
            <img
              src="https://akilisystems.in/images/_ecommerce_1.jpg"
              alt=""
              width="150"
            />
          </div>
          <div className="col-6 mt-2">
            <Link to="/biz-login" className="btn btn-info text-dark mt-3">
              <b>Connect with Business Account</b>
              <i className="pl-2 fas fa-user-tie"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BizRegistration;
