import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar';
import AboutScreen from '../pages/AboutScreen';
import BlogScreen from '../pages/BlogScreen';
import ContactScreen from '../pages/ContactScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import PortfolioScreen from '../pages/PortfolioScreen';
const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path='/about' component={AboutScreen}/>
                    <Route exact path='/home' component={HomeScreen}/>
                    <Route exact path='/portfolio' component={PortfolioScreen}/>
                    <Route exact path='/blog' component={BlogScreen}/>
                    <Route exact path='/contact' component={ContactScreen}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </Fragment>
     );
}
 
export default DashboardRoutes;