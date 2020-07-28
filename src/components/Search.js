import React from "react";
import { connect } from "react-redux";
import { searchRequestAction } from "./../redux";

class Search extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const { products } = this.props;
    console.log(" products ", products);

    return (
      <div> <input type="text" name="search" placeholder="Search Products" /></div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    products : state.products
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    searchRequestAction: (t) => dispatch(searchRequestAction(t)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Search);
