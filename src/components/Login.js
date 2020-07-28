import React from 'react';
import {connect} from 'react-redux';
import {loginAction } from './../redux';
import common from './common';

console.log("como ",common)
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    componentDidMount = () => {
       if(localStorage.getItem('userInfo') != null) {            
            this.props.history.push('/product')
        }
    }

    //a. Username: amigo | 
    //b. Password: delta
    _onClick = ( username, password) => {
        var _that = this;
        console.log("_onClick username ",username," password ",password)
        this.props.loginTrigger( username , password).then( r => {
            console.log("_onClick username ",username," password ",password," r ",r)
            _that.props.history.push('/product')
        })
    }

    _onChange = (type, value) => {
        if(type && value ) {
            console.log(" =_onChange== ",type, " ", this.state[type]," == ",value)            
            this.setState({ [type] : value})
        }
        
    }
    render () {

        const{username, password} = this.state;
        const{user, loginTrigger} = this.props;

        return (
            <div>
                Login page <br/>
                <input type="text" name="username" value={username} onChange={(e)=>this._onChange('username', e.target.value)} /> <br/>
                <input type="text" name="password" value={password} onChange={(e)=>this._onChange('password', e.target.value)} /> <br/>
                <button onClick={() => this._onClick(username, password)}>Login </button>
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        user : state.user
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        loginTrigger : (username, password) => dispatch(loginAction(username, password))
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Login);