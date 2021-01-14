import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import HeaderH1 from "./common/header-h1";
import { toast } from "react-toastify";
import userService from "../services/service/userService";
import { Link, Redirect } from "react-router-dom";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    headerH1Data: {
      color: "text-warning",
      bgColor: "bg-warning",
      titleLine1: "Login Form",
    },
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.userLogin(email, password);

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
    const { headerH1Data } = this.state;

    if(userService.getCurrentUser()) return <Redirect to="/" />
    return (
      <div className="container">
        <HeaderH1 headerH1Data={headerH1Data} />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="">SIGN IN</h3>
            <p className="">Discover new deals updated everyday.</p>
          </div>
          <div className="col-lg-6 border-left d-none d-lg-block">
            <h3 className="">Don't have GadgetShop Account?</h3>
            <p className="">
              Join GadgetShop and discover new console games to play
              <br />
              and useful Gadgets for everyday use.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login", "fas fa-sign-in-alt", "btn-success")}
            </form>
          </div>
          <div className="col-6 text-center pt-5 border-left d-none d-lg-block">
            <img
              src="https://www.pngkit.com/png/full/291-2918028_gamergirl-anime-ps4-playstation-playstation4-girl-gamer-anime.png"
              alt=""
              width="200"
            />
            <p className="mt-5">It's free and easy to use.</p>
            <Link to="/register" className="btn btn-warning">
              Register to GadgetShop
              <i className="pl-2 fas fa-gamepad"></i>
            </Link>
          </div>
        </div>
        <div className="row d-lg-none text-center">
          <div className="col">
            <hr className="mb-5 mt-5" />
            <h3 className="">Don't have GadgetShop Account?</h3>
            <p className="">
              Join GadgetShop and discover new console games to play
              <br />
              and useful Gadgets for everyday use.
            </p>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col-6">
            <img
              src="https://www.pngkit.com/png/full/291-2918028_gamergirl-anime-ps4-playstation-playstation4-girl-gamer-anime.png"
              alt=""
              width="200"
            />
          </div>
          <div className="col-6">
            <p className="mt-5">It's free and easy to use.</p>
            <Link to="/register" className="btn btn-warning">
              Register to GadgetShop
              <i className="pl-2 fas fa-gamepad"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
