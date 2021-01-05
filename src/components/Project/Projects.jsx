import React, { useEffect,useState, Fragment } from 'react'
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Spinner from '../Spinner';
import Proyect from './Project';
import './Project.scss';
const Projects = () => {



    // Prductos=state, guardarProductos=function to save 
    const[proyects,saveProjects]=useState([]);
    
    // query a la api
    const consultarAPI=async()=>{
        // console.log('consultando');
        const proyectConsulta=await clienteAxios.get('/proyectos');
        // console.log(proyectConsulta);
        saveProjects(proyectConsulta.data);
    }
    // consutar api cuando cargue
    useEffect(()=>{
        // llamo a la query
            consultarAPI();
    },[proyects]);

    // spínner de carga
    if(!proyects.length)return <Spinner/>
    return ( 
        <Fragment>
            <h2>Projects</h2>
            <Link to={'/projects/nuevo'}>
                Nuevo Proyecto
            </Link>
            <ul>
                {proyects.map(proyecto=>(
                    <Proyect 
                    key={proyecto._id}
                    proyecto={proyecto}
                    />
                ))}
           
            </ul>
        </Fragment>
     );
}
 
export default Projects;