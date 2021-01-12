import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import userService from "../../services/service/userService";
import { Link, Redirect } from "react-router-dom";
import HeaderH1 from "../common/header-h1";

class BizLogin extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    headerH1Data: {},
  };

  componentDidMount(){
    this.setState({
      headerH1Data: {
        color: "text-info",
        bgColor: "bg-info",
        titleLine1: "Business Client",
        titleLine2: "Login",
      },
    });
  }

  schema = {
    email: Joi.string().required().email().label("Business Client Email"),
    password: Joi.string().required().min(6).label("Business Client Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.bizLogin(email, password);

      toast.success("You logged in successfully!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        window.location = "/";
      }, 2000);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({
          errors: { email: "Email or Password are not currect" },
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
          <div className="col-lg-6">
            <h3>SIGN IN</h3>
            <p>
              Post offers to your profile to show what makes your business
              unique, and give customers reasons to choose you every time.
            </p>
          </div>
          <div className="col-lg-6 border-left d-none d-lg-block">
            <h3>Don't have Business Account?</h3>
            <p>
              Your free Business Profile lets you easily connect with customers
              across <b>GadgetShop Store</b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Business Client Email", "email")}
              {this.renderInput(
                "password",
                "Business Client Password",
                "password"
              )}
              {this.renderButton("Login", "fas fa-sign-in-alt", "btn-primary")}
            </form>
          </div>
          <div className="col-lg-6 border-left d-none d-lg-block">
            <div className="col">
              <img
                src="https://img.freepik.com/free-vector/illustration-jigsaw-icon_53876-3295.jpg?size=338&ext=jpg"
                alt=""
                width="200"
              />
            </div>
            <Link to="/biz-register" className="btn btn-info text-dark">
              <b>Create Business Account</b>
              <i className=" pl-2 fas fa-suitcase"></i>
            </Link>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col">
            <hr className="mb-5 mt-5" />
            <h3>Don't have Business Account?</h3>
            <p>
              Your free Business Profile lets you easily connect with customers
              across <b>GadgetShop Store</b>
            </p>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col-6">
            <img
              src="https://img.freepik.com/free-vector/illustration-jigsaw-icon_53876-3295.jpg?size=338&ext=jpg"
              alt=""
              width="200"
            />
          </div>
          <div className="col-6 mt-5">
            <Link to="/biz-register" className="btn btn-info text-dark mt-5">
              <b>Create Business Account</b>
              <i className=" pl-2 fas fa-suitcase"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BizLogin;
