import React, { Fragment } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar';
import AboutScreen from '../pages/AboutScreen';
import BlogScreen from '../pages/BlogScreen';
import ContactScreen from '../pages/ContactScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import PortfolioScreen from '../pages/PortfolioScreen/PortfolioScreen';
import EditProject from '../components/Project/EditProject';
import NewProject from '../components/Project/NewProject';


const DashboardRoutes = () => {

    return (
        <Fragment>
            <Navbar/>
            <div>
                <Switch >
                    <Route exact path='/about' component={AboutScreen}/>
                    <Route exact path='/home' component={HomeScreen}/>
                    <Route exact path={['/projects/show/:id','/portfolio']} component={PortfolioScreen} />
                    <Route exact path='/projects/nuevo' component={NewProject} />
                    <Route exact path='/projects/editar/:id' component={EditProject} />
                    <Route exact path='/contact' component={ContactScreen} />
                    <Route exact path='/blog' component={BlogScreen}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </Fragment>
     );
}
 
export default DashboardRoutes;