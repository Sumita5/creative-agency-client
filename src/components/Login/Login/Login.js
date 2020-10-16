import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../../images/GoogleLogo.png';
import logo from '../../../images/logo.png';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut } from './loginManager';
import './Login.css';

const Login = () => {
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = (e) => {
        handleGoogleSignIn()
        .then(res => {
            setLoggedInUser(res);
            history.replace(from);
        })
        e.preventDefault();
    }
    
    return (
        <div>
            <img className='mt-5' height='60' src={logo} alt="Creative Agency" /> <br /><br />
            <div className='login-box py-5'>
                <div>
                <h4>Login with</h4>
                <button onClick={googleSignIn} className="pill-button">
                    <img className="mx-3"src={google} alt="Google" />Continue with Google</button>
                <p>Don't have an account? Create an account</p>
                </div>

            </div>

        </div>
    );
};

export default Login;