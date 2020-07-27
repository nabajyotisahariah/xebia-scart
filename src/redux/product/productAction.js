import * as Type from './productType'
import axios from 'axios';
//const axios = require('axios');

export const productInitiateAction = () => {
    return {
        type : Type.PRODUCT_INITIATE
    }
}

export const productSuccessAction = (users) => {
    return {
        type : Type.PRODUCT_SUCCESS,
        payload : users
    }
}

export const productFaliureAction = (err) => {
    return {
        type : Type.PRODUCT_FAILURE,
        payload : err
    }
}


export const productRequestAction = () => {
    return (dispatch) => {
        dispatch(productInitiateAction());
        axios.get('https://xebiascart.herokuapp.com/products', {})
        .then( response => {
            console.log(response);
            if(response.status == 200) {
                const products = response.data;
                if(products) {
                    dispatch( productSuccessAction(products));
                }
                else {
                    dispatch( productFaliureAction("No data"));
                }
            }
            else {
                dispatch( productFaliureAction("No data"));
            }
            
            
        })
        .catch( error => {
            console.log(error);
            dispatch( productFaliureAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }
}
//https://xebiascart.herokuapp.com/users?username=amigo - Login
//https://xebiascart.herokuapp.com/products - Product
//https://xebiascart.herokuapp.com/products?title=provogue - Autocomplete
//https://xebiascart.herokuapp.com/filters - Group Filter

export const searchRequestAction = (searchBy) => {

    return (dispatch) => {
        axios.get('https://xebiascart.herokuapp.com/products?title=provogue', {})
        .then( response => {
            console.log("searchRequestAction ", response);
            if(response.status == 200) {
                /*const products = response.data;
                if(products) {
                    dispatch( productSuccessAction(products));
                }
                else {
                    dispatch( productFaliureAction("No data"));
                }*/
            }            
        })
        .catch( error => {
            console.log(error);
        })
    }
}

export const filterRequestAction = () => {
    return (dispatch) => {
        axios.get('https://xebiascart.herokuapp.com/filters', {})
        .then( response => {
            console.log("filterRequestAction ", response);
            if(response.status == 200) {
                const products = response.data;
                if(products) {
                    dispatch( {
                        type: Type.PRODUCT_FILTER,
                        payload:products
                    });
                }
               
            }
        })
        .catch( error => {
            console.log(error);
        })
    }
}