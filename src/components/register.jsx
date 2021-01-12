import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import HeaderH1 from "./common/header-h1";
import http from "../services/service/httpService";
import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
import userService from "../services/service/userService";
import { Link, Redirect } from "react-router-dom";

class Register extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: {},
    headerH1Data: {
      color: "text-warning",
      bgColor: "bg-warning",
      titleLine1: "Registration Form",
    },
  };

  schema = {
    name: Joi.string().required().min(2).label("Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const {data} = this.state;
    
    try {
      await http.post(`${apiUrl}/users`, data);
      toast.success("You successfuly registred");
      this.props.history.replace("/login");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
      }
    }
  };

  render() {
    const { headerH1Data } = this.state;

    if (userService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block border-right">
            <h3>Alredy have GadgetShop Account?</h3>
            <p>
              Login and check witch hot and new deals are waiting for you at{" "}
              <b>GadgetyShop Store</b>.
            </p>
          </div>
          <div className="col-lg-6">
            <h3 className="text-center">Don't have account yet?</h3>
            <p className="text-center">
              <b>Join GadgetShop</b> and discover your next platform of games
              <br />
              to play or useful gadgets for daily use.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-center d-none d-lg-block border-right">
            <div className="col">
              <img
                src="https://www.meme-arsenal.com/memes/a8cf1a708fda169a91402acfeb7fcc85.jpg"
                alt=""
                width="200"
                className=""
              />
              <Link to="/login" className="btn btn-warning">
                Connect to GadgetShop
                <i className="pl-2 fas fa-gamepad"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton(
                "Register",
                "fas fa-file-signature",
                "btn-success"
              )}
            </form>
          </div>
        </div>
        <div className="row d-lg-none text-center">
          <div className="col">
            <hr className="mb-5 mt-5" />
            <h3>Alredy have GadgetShop Account?</h3>
            <p>
              Login and check witch hot and new deals are waiting for you at
              <b>GadgetyShop Store</b>.
            </p>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col-6">
            <img
              src="https://www.meme-arsenal.com/memes/a8cf1a708fda169a91402acfeb7fcc85.jpg"
              alt=""
              width="200"
              className=""
            />
          </div>
          <div className="col-6 align-self-center">
            <Link to="/login" className="btn btn-warning">
              Connect to GadgetShop
              <i className="pl-2 fas fa-gamepad"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
