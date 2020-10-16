import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import Review from '../Review/Review';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';
import { handleSignOut } from '../../Login/Login/loginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCommentDots, faListAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const CustomerDashboard = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedMenu, setSelectedMenu] = useState('ORDER');
    console.log(loggedInUser)
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res);
                sessionStorage.clear();
                history.push('/home')
            })
    }
    return (
        <div className="dashboard container-fluid">
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <Link to="/">
                        <img src={logo} className="w-50 m-3" alt="img" />
                    </Link>
                </div>
                <div className="col-12 col-md-6">
                    {selectedMenu === 'ORDER' && <h3 className="p-3">ORDER</h3>}
                    {selectedMenu === 'SERVICE' && <h3 className="p-3">Service list</h3>}
                    {selectedMenu === 'REVIEW' && <h3 className="p-3">Review</h3>}
                </div>
                <div className="col-12 col-md-1">
                    <img
                        src={loggedInUser.photo}
                        style={{ height: '50px', width: '50px', borderRadius: '50%' }}
                        alt=""
                    />
                </div>
                <div className="col-6 col-md-2 font-weight-bold">{loggedInUser.name}</div>
            </div>
            <main>
                <div className="row">
                    <div className="sidebar col-12 col-sm-12 col-md-2">
                        <ul className="list-unstyled">
                            <li className={selectedMenu === 'ORDER' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('ORDER')} >
                                <FontAwesomeIcon icon={faCartArrowDown} /><span> Order</span>
                            </li>
                            <li className={selectedMenu === 'SERVICE' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('SERVICE')} >
                                <FontAwesomeIcon icon={faListAlt} /><span> Service list</span>
                            </li>
                            <li className={selectedMenu === 'REVIEW' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('REVIEW')}>
                                <FontAwesomeIcon icon={faCommentDots} /><span> Review</span>
                            </li>
                            <li>
                                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} />
                                    <span onClick={signOut}>Logout</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="col-12 col-sm-12 col-md-10 dashboard-content">
                        {selectedMenu === 'ORDER' && <div className="p-5">
                            <Link to="/#services">
                                <h4 className="lead text-center">Click here to Order Awesome Services</h4>
                            </Link>
                        </div>
                        }
                        {selectedMenu === 'SERVICE' && <CustomerServiceList />}
                        {selectedMenu === 'REVIEW' && <Review />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CustomerDashboard;