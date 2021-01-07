import React, { useEffect,useState, Fragment } from 'react'
// import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../ProjectsBorrador.scss';
import clienteAxios from '../../../config/axios';
import { Header } from './Header';
import Spinner from '../../Spinner';
import styled from '@emotion/styled';

const P=styled.p`
text-align:center;
font-size:2rem;
color:#f5b46b;
font-weight:bold;
text-decoration:underline;
text-transform:uppercase;
`;


function Card({ card }) {
  // location, url,description no se usan
    const{nombre,position,imagen,_id}=card;
  // console.log(nombre);
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

    const[positionProject,savePositionProject]=useState([]);
    const[liste,saveListe]=useState(false);

    const consultarAPI=async()=>{
        // console.log('consultando');
        const proyectConsulta=await clienteAxios.get('/proyectos');
        let positioncurrent=await(proyectConsulta.data.filter(e=>e.position==='FullStack'));
        saveProjects(proyectConsulta.data);
        savePositionProject(positioncurrent);
    }
    // consutar api cuando cargue
    useEffect(()=>{
        // llamo a la query
            consultarAPI();
        // console.log(positionProject);

    },[]);
    if(!proyects.length)return <Spinner/>

    // let change=false;
    const handleClick =()=>{
      saveListe(!liste);
    }

  return (
      <Fragment>
    {/* <h2>Projects</h2> */}
    
    <Header/>
    {/* <Link to={'/projects/nuevo'}>
        Nuevo Proyecto
    </Link> */}
    <div className="containerList" >
    <div onClick={handleClick} style={{cursor:'pointer',color:'#a7a7a7'}}>Filter by position: {liste?'FullStack':'All'}</div>
    {!liste?(
        
        
    <ul className="card-list">
      
      {proyects.map(card => (
        <Card key={card._id} card={card} isSelected={card._id === selectedId} />
      ))}
    </ul>
    ):
    <ul className="card-list">
      
      {positionProject.map(card => (
        <Card key={card._id} card={card} isSelected={card._id === selectedId} />
      ))}
    </ul>
    }
      <P >And More</P>
    </div>
    
    </Fragment>
  );
}
