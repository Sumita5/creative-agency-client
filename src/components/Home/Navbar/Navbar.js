import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import { handleSignOut } from '../../Login/Login/loginManager';

const Navbar = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        handleSignOut()
        .then(res => {
            setLoggedInUser(res);
            sessionStorage.clear();
            history.push('/home')
        })
    }
    return (

            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/home">
                    <img height="50" src={logo} alt=""/>
                </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active ">
                                <Link className="nav-link mr-4" to='/'><span className="border-bottom border-success">Home</span><span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="#">Our Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="#">Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="/#contact">Contact Us</Link>
                            </li>
                            {
                                loggedInUser.name ? <button type="button" className="btn btn-dark btn-brand" onClick={signOut}>Logout</button>
                            :
                                <Link className="nav-item mr-4" to="/dashboard">
                                    <button type="button" className="btn btn-dark btn-brand">Login</button>
                                </Link>
                             }
                                
                        </ul>
                    </div>
                </nav>
             </div>

    );
};

export default Navbar;