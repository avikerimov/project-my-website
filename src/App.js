import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nintendo from "./components/consoles/nintendo";
import Playstation from "./components/consoles/playstation";
import Xbox from "./components/consoles/xbox";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";
import userService from "./services/service/userService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BizRegistration from "./components/biz/bizRegistration";
import BizLogin from "./components/biz/bizLogin";
import BizProtectedRoute from "./components/common/bizProtectedRoute";
import BizStore from "./components/biz/bizStore";
import CreateAd from "./components/biz/createAd";
import EditAd from "./components/biz/editAd";
import Store from "./components/biz/store";
import UserFavorites from "./components/biz/userFavorites";
import UserProtectedRoute from "./components/common/userProtectedRoute";
import Footer from "./components/footer";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <header>
          <ToastContainer />
          <Navbar user={user} />
        </header>

        <main className="min-h-900">
          <Switch>
            <BizProtectedRoute
              path="/my-store"
              component={BizStore}
              biz={true}
            />
            <BizProtectedRoute
              path="/create-ad"
              component={CreateAd}
              biz={true}
            />
            <BizProtectedRoute
              path="/my-ads/edit/:id"
              component={EditAd}
              biz={true}
            />            
            <UserProtectedRoute path="/store" component={Store} biz={false} />
            <UserProtectedRoute
              path="/my-Favorites"
              component={UserFavorites}
              biz={false}
            />
            <Route path="/" exact component={Home} />
            <Route path="/xbox" component={Xbox} />
            <Route path="/playstation" component={Playstation} />
            <Route path="/nintendo" component={Nintendo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/biz-login" component={BizLogin} />
            <Route path="/biz-register" component={BizRegistration} />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
