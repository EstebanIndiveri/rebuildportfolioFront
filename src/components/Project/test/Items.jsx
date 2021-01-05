import React, {  Fragment } from 'react'

import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link, useHistory } from "react-router-dom";
// import { items } from "./data";
import '../ProjectsBorrador.scss';
import clienteAxios from '../../../config/axios';



export function Item(props) {
  const history = useHistory();
    const{proyect:{nombre,position,location,imagen,description,_id}}=props;
//   const { nombre,position,location,imagen,description,_id }=proyect;
  let id=_id;
//   const { nombre,position,location,imagen,description };
imagen&&
    console.log(nombre,description,`http://localhost:5000/${imagen}`);


  return (  
       
    
    <Fragment>
           {imagen&&(

    <Fragment>
           
        
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto",overflowY:'scroll',position:'relative',background:'black' }}
        className="overlay"
        
      >
        {/* <Link to="/portfolio#projects"/> */}

      </motion.div>
      <div  className="card-content-container open" >
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container cursor-pointer"
            layoutId={`card-image-container-${id}`}
            onClick={()=>history.goBack()
            }
          >
            <img className="card-image" src={`http://localhost:5000/${imagen}`} alt="" />

              

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
            {description}
          </motion.div>
        </motion.div>
      </div>
    </Fragment>

      )}
    </Fragment>
    
  );
}
