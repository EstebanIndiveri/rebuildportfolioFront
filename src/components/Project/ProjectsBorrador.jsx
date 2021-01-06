import React, { useEffect,useState, Fragment } from 'react'
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';
// import Spinner from '../Spinner';
// import ProyectBorrador from './ProjectBorrador';
import './Project.scss';
import { Col, Container, Row,Card } from 'reactstrap';
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
    // if(!proyects.length)return <Spinner/>
    return ( 
        <Fragment>
          
            <Container >
            <h2 style={{textAlign:'center'}}>Projects</h2>
            <Link to={'/projects/nuevo'}>
                Nuevo Proyecto
            </Link>
                <Row className="justify-content-between" style={{height:'100vh'}} >
            {/* <div style={{width:'100%',justifyContent:'space-between',alignContent:'center',alignItems:'center',textAlign:'center'}}> */}
                {proyects.map(proyecto=>(
                    // <ProyectBorrador 
                    // key={proyecto._id}
                    // proyecto={proyecto}
                    // />
                    <Col  key={proyecto._id} md="12" sm="12" lg="3" xs="12" style={{height:'250px'}} >
                        <Card style={{height:'100%', width:'100%',border:'none',boxShadow:'3px 3px 2px 2px #769fac'}}>
                        <img style={{opacity:'.4'}} height='100%' class="card-img" src={`http://localhost:5000/${proyecto.imagen}`} alt="Cardi"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title" style={{color:'red'}}>{proyecto.nombre}</h5>
                            <p class="card-text">{proyecto.description}</p>
                            <p class="card-text">{proyecto.position}</p>
                        </div>
                       
                        </Card>
                    </Col>
                ))}
           
            {/* </div> */}
                </Row>
            </Container>

        </Fragment>
     );
}
 
export default ProjectsBorrador;