import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/Customer/PlaceOrder/PlaceOrder';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import './App.css';
export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    
    return (
        <div className="App">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <PrivateRoute path="/placeOrder/:id">
                            <PlaceOrder />
                        </PrivateRoute>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
