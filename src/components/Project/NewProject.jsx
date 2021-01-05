import React,{useState,Fragment} from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import './NewProject.scss';
import {withRouter} from 'react-router-dom';
const NewProject = (props) => {

    // Proyect=state
    const[project,saveProject]=useState({
        nombre:'',
        location:'',
        position:'',
        description:'',
    })

    // Archivo
    const[archivo,guardarArchivo]=useState('');

    //new project uipload image
    const agregarProyecto=async e=>{
        e.preventDefault();

        // crear form data
        const formData=new FormData();
        formData.append('nombre',project.nombre);
        formData.append('location',project.location);
        formData.append('position',project.position);
        formData.append('description',project.description);
        formData.append('imagen',archivo);

        try {
            const resp=await clienteAxios.post('/proyectos',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            // console.log(resp);
            if(resp.status===200){
                Swal.fire(
                    'Se creo correctamente el proyecto',
                    resp.data.mensaje,
                    'success'
                )
            }
            // redirect
            props.history.push('/portfolio')
        } catch (error) {
           console.log(error); 
           Swal.fire({
               type:'error',
               title:'Hubo un error',
               text:'Vuelva a intentarlo'
           })
        }
    } 

    // leer datos
    const readInformationProyect=e=>{
        saveProject({
            ...project,
            [e.target.name]:e.target.value
        })
    }
    // image in state
    const readFile=e=>{
        // console.log(e.target.files[0]);
        guardarArchivo(e.target.files[0])
    }

    return ( 
    <Fragment>
        <h2>Nuevo Proyecto</h2>
        <form 
        onSubmit={agregarProyecto}
        >
            <legend>Llena todos los campos</legend>
            <div className="campo">
                <label>Name:</label>
                <input type="text" placeholder="Nombre del proyecto" name="nombre" onChange={readInformationProyect}/>
            </div>
            <div className="campo">
                <label>Location:</label>
                <input type="text" placeholder="Project Location" name="location" onChange={readInformationProyect}/>
            </div>
            <div className="campo">
                <label>Position:</label>
                <input type="text" placeholder="Project Position" name="position" onChange={readInformationProyect}/>
            </div>
            <div className="campo">
                <label>Description:</label>
                <input type="text" placeholder="Project Position" name="description" onChange={readInformationProyect}/>
            </div>
           
            <div className="campo">
                <label>Imagen:</label>
                <input type="file" placeholder="Project Image" name="imagen" onChange={readFile}/>
            </div>
            <div className="enviar">
                <input type="submit" className="btn btn-info" value="Agregar Proyecto"/>

            </div>
        </form>

    </Fragment> 
    );
}
 
export default withRouter(NewProject);