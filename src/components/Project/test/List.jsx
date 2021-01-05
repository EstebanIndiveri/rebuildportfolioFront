import React, { useEffect,useState, Fragment } from 'react'
// import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../ProjectsBorrador.scss';
import clienteAxios from '../../../config/axios';
import { Header } from './Header';



function Card({ card }) {
    const{nombre,position,location,imagen,description,_id}=card;

  return (
    <li className={`card `}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${_id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${_id}`}
          >
            <img className="card-image" src={`http://localhost:5000/${imagen}`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${_id}`}
          >
            <span className="category">{position}</span>
            <h2 className="titlesCard">{nombre}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`/projects/show/${_id}`} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
    
    const[proyects,saveProjects]=useState([]);

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
    },[]);
  return (
      <Fragment>
    <h2>Projects</h2>
    <Link to={'/projects/nuevo'}>
        Nuevo Proyecto
    </Link>
    <Header/>
    <ul className="card-list">
      {proyects.map(card => (
        <Card key={card._id} card={card} isSelected={card._id === selectedId} />
      ))}
    </ul>
    </Fragment>
  );
}
