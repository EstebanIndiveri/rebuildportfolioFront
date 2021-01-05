import React, { useEffect,useState, Fragment,useRef } from 'react'
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Spinner from '../Spinner';
import ProjectBorrador from './ProjectBorrador';
import './Project.scss';
import './ProjectsBorrador.scss';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Col, Row } from 'reactstrap';
// import { motion, AnimateSharedLayout } from "framer-motion";



const ProjectsBorrador = () => {
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
        // // <Fragment>
        // //     <h2>Projects</h2>
        // //     <Link to={'/projects/nuevo'}>
        // //         Nuevo Proyecto
        // //     </Link>
        // <div className="card-container">
        //     <AnimateSharedLayout>
        //         {proyects.map((proyecto,i)=>(
        //             // <ProjectBorrador 
        //             // key={proyecto._id}
        //             // setSelectedId={proyecto._ud}
        //             // proyecto={proyecto}
        //             // />
                  
        //         ))}
        //    </AnimateSharedLayout>
        //    </div>
        // </Fragment>
        <Container>
          {proyects.map(proyecto => (
                <Col md="4">

           <Card inverse>
            <CardImg height="120px" width="120px" src={`http://localhost:5000/${proyecto.imagen}`} alt="Card image cap" />
            <CardImgOverlay>
                <CardTitle tag="h5">{proyecto.nombre}</CardTitle>
                <CardText>{proyecto.description}.</CardText>
                <CardText>
                <small className="text-muted">{proyecto.position}</small>
                </CardText>
            </CardImgOverlay>
            </Card>
          </Col>

          ))}
        </Container>
     );
}
 
export default ProjectsBorrador;