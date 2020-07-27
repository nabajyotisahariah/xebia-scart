import React from 'react';
import {connect} from 'react-redux';
import {productRequestAction, searchRequestAction, filterRequestAction } from './../redux';
import FilterListing from './FilterListing';

class ProductListing extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    _onClick = ( product) => {
        console.log("_onClick ",product)
    }

    componentDidMount() {
        this.props.productInfoTrigger();
        this.props.filterTrigger();

    }

    render () {

        const{username, password} = this.state;
        const{products, loginTrigger} = this.props;

        console.log("products ",products)
        return (
            <div>
                <div><FilterListing data = {this.props.products.filterList}/></div>
                <div>
                    Product page <br/>
                    {
                        products.productList.map( p => {
                            return (<div key={p.id}>
                                        <div>
                                            <img src={p.image} height="50" width="50"/>
                                            Discount {p.discount} %
                                        </div>
                                        
                            <div>{p.title} color {p.colour.color}</div>
                                        <div>Brand {p.brand} <span onClick={ () => this._onClick(p)}> Add </span>  </div>
                                        <div>Price {p.price.final_price}$</div>
                                    </div>    
                                    )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        products : state.products
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        productInfoTrigger : () => dispatch(productRequestAction()),
        searchTrigger : () => dispatch(searchRequestAction('anc')),
        filterTrigger : () => dispatch(filterRequestAction())

    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ProductListing);