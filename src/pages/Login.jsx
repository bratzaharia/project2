import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { loginUser } from '../redux/actions/user'

import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'



class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if(this.props.userData !== prevProps.userData) {
            this.props.history.push('/')
        }
    }


    render() {
        const { loginUser, userData, loading } = this.props;

        // console.log(loading, userData)

        return (
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5" />
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => loginUser()}
                >
                    <Google className="w-50 mr-3" />
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
            </div>
        );

    }

    // componentDidUpdate se apeleaza ca se modifica propurile
}

function mapStateToProps(state) {
    return {
        loading: state.user.loading,
        userData: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: () => { dispatch(loginUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);