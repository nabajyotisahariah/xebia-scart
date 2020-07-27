import {LOGIN_USER_INITIATE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER_REQUEST} from './userType'
import axios from 'axios';
//const axios = require('axios');

export const loginInitiateAction = () => {
    return {
        type : LOGIN_USER_INITIATE
    }
}

export const successRequestAction = (users) => {
    return {
        type : LOGIN_USER_SUCCESS,
        payload : users
    }
}

export const failureRequestAction = (err) => {
    return {
        type : LOGIN_USER_FAILURE,
        payload : err
    }
}


export const loginAction = (username, password) => {
    return (dispatch) => {
        dispatch(loginInitiateAction());
        axios.get('https://xebiascart.herokuapp.com/users?username=amigo', {})
        .then( response => {
            console.log(response);
            const user = response.data[0];

            console.log("asyncLoginAction ",user," == ",user.username, " = ",user.password," == ",username," = ",password)
            if(user.username == username && user.password == password) {
                dispatch( successRequestAction(user));
            }
            else {
                dispatch( failureRequestAction("Login Failed"));
            }
            
        })
        .catch( error => {
            console.log(error);
            dispatch(failureRequestAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }
}

export const logoutAction = () => {
    return {
        type:LOGOUT_USER_REQUEST        
    }
}
