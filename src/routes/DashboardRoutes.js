import React, { Fragment,useState,useEffect } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar';
import AboutScreen from '../pages/AboutScreen';
import BlogScreen from '../pages/BlogScreen';
import ContactScreen from '../pages/ContactScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import PortfolioScreen from '../pages/PortfolioScreen/PortfolioScreen';
import EditProject from '../components/Project/EditProject';
import NewProject from '../components/Project/NewProject';

// import ProjectIndividual from '../components/Project/ProjectIndividual';

import {List} from '../components/Project/test/List';
import {Item} from '../components/Project/test/Items';


import { AnimatePresence } from "framer-motion";
import clienteAxios from '../config/axios';

const Store=({ match })=> {
    let { id } = match.params;
    const imageHasLoaded = true;
    const[proyect,saveProjects]=useState({});

    // consutar api cuando cargue
  useEffect(()=>{
    // api
        const consultarApi=async()=>{
            const productoConsulta=await clienteAxios.get(`/proyectos/${id}`);
            // console.log(productoConsulta);
            saveProjects(productoConsulta.data);
            // console.log(proyect);
        }
        consultarApi();
        // eslint-disable-next-line
    },[])
    return (
      <>
            <AnimatePresence>
        <List selectedId={id} />
        
          {id && imageHasLoaded &&  <Item id={id} proyect={proyect} key="item" />}
          </AnimatePresence>
        
      </>
    );
  }
  

const DashboardRoutes = () => {

    return (
        <Fragment>
            <Navbar/>
            <div>
            <AnimatePresence>
                <Switch >
                    <Route exact path='/about' component={AboutScreen}/>
                    <Route exact path='/home' component={HomeScreen}/>
                    <Route exact path='/portfolio' component={PortfolioScreen} />

                    <Route exact path='/projects/nuevo' component={NewProject} />
                    <Route exact path='/projects/editar/:id' component={EditProject} />
                    <Route exact path='/projects/show/:id' component={Store} />
                    <Route exact path='/blog' component={BlogScreen}/>
                    <Route exact path='/contact' component={ContactScreen}/>
                    <Redirect to="/home"/>
                </Switch>
                </AnimatePresence>
            </div>
        </Fragment>
     );
}
 
export default DashboardRoutes;