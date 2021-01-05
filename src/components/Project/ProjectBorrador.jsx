import React, { useState,useEffect,Fragment } from "react";

import { Col, Container, Row } from "reactstrap";
import clienteAxios from "../../config/axios";
import Spinner from "../Spinner";

export default function App() {
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
    },[proyects]);

    // spínner de carga
    if(!proyects.length)return <Spinner/>
  return (
    <Fragment>
        <Row className="totalservices">
            <Col
                className="servicesContainer"
                sm={12} xs={12} md={12} lg={12}
                >
                <div className="servicios contenedor">

                    {proyects.map(proyecto => (
                        <div className="servicio"
                        onClick={()=>{console.log('agrandear')}}
                        >
                            <h2>Competitive &nbsp; price</h2>
                            {/* <i className="fas fa-leaf"></i> */}
                            <img height="128px" width="128px" src={`http://localhost:5000/${proyecto.imagen}`} alt=""></img>
                            <p>{proyecto.description}</p>
                            <p>{proyecto.position}</p>
                        </div>
                    ))}
                </div>

            </Col>
        </Row>
    </Fragment>
  );
}
