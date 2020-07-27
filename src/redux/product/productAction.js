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
