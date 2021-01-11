import React, {  Fragment,useState,useEffect } from 'react'

import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import '../ProjectsBorrador.scss';
import clienteAxios from '../../../config/axios';



export function Item(props) {
  const[project,saveProject]=useState({});
  // console.log(id);
  // consutar api cuando cargue
const{id}=props;
// console.log(props);
useEffect(()=>{

  // api
      const consultarApi=async()=>{
          const productoConsulta=await clienteAxios.get(`/proyectos/${id}`);
          // console.log(productoConsulta.data);
          await saveProject(productoConsulta.data);
          // console.log(project);
      }
        consultarApi();
      // eslint-disable-next-line
  },[id])


  const history = useHistory();
    const{nombre,position,location,imagen,description,_id,url}=project;
 

  return (  
       
    
    <Fragment>
           {imagen&&(

    <Fragment>
           {/* 
            initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }} */}
        
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        
      >
        {/* <Link to="/portfolio#projects"/> */}

      </motion.div>
      <div  className="card-content-container open" >
        <motion.div className="card-content" layoutId={`card-container-${_id}`} initial={{ opacity: 0 }}
        animate={{ opacity: 0,msTransitionDuration:3000 }}
        >
          
          <motion.div
            className="card-image-container cursor-pointer"
            layoutId={`card-image-container-${_id}`}
            onClick={()=>history.goBack()
            }
          >
            {/* <img className="card-image" src={`http://localhost:5000/${imagen}`} alt="" /> */}
            <img className="card-image" src={`${process.env.REACT_APP_ENVPOST}/${imagen}`} alt="" />



          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{position}</span><br/>
            <span className="location">{location}</span>

            <h2 className="titlesCard">{nombre}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            {/* <LoremIpsum
              p={2}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            /> */}
            {url&&(<div className="text-center">
              Demo: <a href={url} target="_blank" alt="" rel="noreferrer">{url}</a>
              </div>
            )}<br/>
            <p className="textoContainer text-justify w-100">
            {description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Fragment>

      )}
    </Fragment>
    
  );
}
