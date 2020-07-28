import React from "react";
import { connect } from "react-redux";
import { logoutAction } from "./../redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  _onClick = () => {
    //var _that = this;
    console.log(" === ", this.props);
    this.props.logoutAction()
    this.props.history.push("/");
  };

  render() {
    //const{} = this.state;
    const { user, isLogin, userinfo, logoutAction, productCart } = this.props;

    console.log(" isLogin ", isLogin, " user ", user, " userinfo ", userinfo);
    return (
      <header>
        <div>Logo</div>
        {isLogin ? (
          <p>
            {`Welcome ${userinfo.fullName}`} |{" "}
            <button onClick={() => this._onClick()}>Logout </button>
          </p>
        ) : (
          "Login"
        )}
        <br/>
        Cart {productCart}
      </header>
    );
  }
}

const verifyIsLogin = () => {
  if (window) {
    if (
      localStorage.getItem("userInfo") != null &&
      localStorage.getItem("userInfo") != "null"
    ) {
      return true;
    }
  }
  return null;
};

const userInfo = () => {
  if (window) {
    if (
      localStorage.getItem("userInfo") != null &&
      localStorage.getItem("userInfo") != "null"
    ) {
      return JSON.parse(localStorage.getItem("userInfo"));
    }
  }
  return null;
};

const mapsStateToProps = (state) => {
  return {
    user: state.user,
    productCart : state.products.addToCart.length, 
    isLogin: verifyIsLogin(),
    userinfo: userInfo(),
    
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => dispatch(logoutAction()),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Header);
