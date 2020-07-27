import React from 'react';
import {connect} from 'react-redux';
import {productRequestAction } from './../redux';

class ProductListing extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    /*_onClick = ( username, password) => {
        this.props.loginTrigger( username , password);
    }*/

    componentDidMount() {
        this.props.productInfoTrigger();
    }

    _onChange = (type, value) => {
        if(type && value ) {
            console.log(" =_onChange== ",type, " ", this.state[type]," == ",value)            
            this.setState({ [type] : value})
        }
        
    }
    render () {

        const{username, password} = this.state;
        const{products, loginTrigger} = this.props;

        console.log("products ",products)
        return (
            <div>
                Product page <br/>
                {
                    products.data.map( p => {
                        return (<div key={p.id}>
                                    <div><img src={p.image} height="50" width="50"/></div>
                                    <div>{p.brand}</div>
                                </div>    
                                )
                    })
                }
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
        productInfoTrigger : () => dispatch(productRequestAction())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ProductListing);