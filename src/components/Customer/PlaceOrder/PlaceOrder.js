import React, {  useContext,  useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCommentDots, faListAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';
import Review from '../Review/Review';
import OrderForm from '../OrderForm/OrderForm';
import { handleSignOut } from '../../Login/Login/loginManager';

const PlaceOrder = () => {
    let history = useHistory();
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedMenu, setSelectedMenu] = useState('ORDER');
    const signOut = () => {
        handleSignOut()
        .then(res => {
            setLoggedInUser(res);
            sessionStorage.clear();
            history.push('/home');

        })
    }
    
    return (
        <section className="dashboard container-fluid">
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-md-3">
                        <Link to="/">
                            <img src={logo} className="w-50 m-3" alt="img" />
                        </Link>
                    </div>
                    <div className="col-6 col-md-6">
                        {selectedMenu === 'ORDER' && <h3 className="p-3">Order</h3>}
                        {selectedMenu === 'SERVICE' && <h3 className="p-3">Service list</h3>}
                        {selectedMenu === 'REVIEW' && <h3 className="p-3">Review</h3>}
                    </div>
                    <div className="col-6 col-md-1">
                        <img
                            src={loggedInUser.photo}
                            style={{ height: '50px', width: '50px', borderRadius: '50%' }}
                            alt=""
                        />
                    </div>
                    <div className="col-6 col-md-2 font-weight-bold">{loggedInUser.name}</div>
                </div>
            </div>
            <div >
            <main>
                <div className="row">
                    <div className="sidebar col-12 col-sm-12 col-md-2">
                        <ul className="list-unstyled">
                            <li className={selectedMenu === 'ORDER' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('ORDER')} >
                            <Link to="/#services" className="text-dark ">
                                <FontAwesomeIcon icon={faCartArrowDown} /><span> Order</span>
                            </Link>
                            </li>
                            <li className={selectedMenu === 'SERVICE' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('SERVICE')} >
                                <FontAwesomeIcon icon={faListAlt} /><span> Service list</span>
                            </li>
                            <li className={selectedMenu === 'REVIEW' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('REVIEW')}>
                                <FontAwesomeIcon icon={faCommentDots} /><span> Review</span>
                            </li>
                            <li>
                            <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={signOut}>Logout</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 dashboard-content">
                        {selectedMenu === 'ORDER' && <OrderForm id={id} />}
                        {selectedMenu === 'SERVICE' && <CustomerServiceList />}
                        {selectedMenu === 'REVIEW' && <Review />}
                    </div>
                </div>
            </main>
            </div>

        </section>
    );
};

export default PlaceOrder;