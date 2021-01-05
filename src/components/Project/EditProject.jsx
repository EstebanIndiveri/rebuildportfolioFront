import React,{useState,Fragment, useEffect} from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import './NewProject.scss';
import {Link, withRouter} from 'react-router-dom';
import Spinner from '../Spinner';
import { Button } from 'reactstrap';

const EditProject = (props) => {
    // obtener el id
    const{id}=props.match.params
// console.log(id);
    // actualizar
    const[project,saveProject]=useState({
        nombre:'',
        location:'',
        position:'',
        description:'',
        imagen:''
    });
   
   // Archivo
   const[archivo,guardarArchivo]=useState('');

    // 
    useEffect(()=>{
    // api
        const consultarApi=async()=>{
            const productoConsulta=await clienteAxios.get(`/proyectos/${id}`);
            // console.log(productoConsulta);
            saveProject(productoConsulta.data);
        }
        consultarApi();
    },[])

    // editar el proyecto
    const editarProject=async e=>{
        e.preventDefault();

        // crear form data
        const formData=new FormData();
        formData.append('nombre',project.nombre);
        formData.append('location',project.location);
        formData.append('position',project.position);
        formData.append('description',project.description);
        formData.append('imagen',archivo);

        try {
            const resp=await clienteAxios.put(`/proyectos/${id}`,formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            // console.log(resp);
            if(resp.status===200){
                Swal.fire(
                    'editado correctamente',
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

        // valores
        const {nombre,location,position,description,imagen}=project;
        // console.log(imagen);
        if(!nombre)return <Spinner/>

    return ( 
        <Fragment>
        <h2>Editar Proyecto</h2>
        <form 
        onSubmit={editarProject}
        >
            <legend>Llena todos los campos</legend>
            <div className="campo">
                <label>Name:</label>
                <input type="text" placeholder="Nombre del proyecto" name="nombre" onChange={readInformationProyect} defaultValue={nombre}/>
            </div>
            <div className="campo">
                <label>Location:</label>
                <input type="text" placeholder="Project Location" name="location" onChange={readInformationProyect} defaultValue={location}/>
            </div>
            <div className="campo">
                <label>Position:</label>
                <input type="text" placeholder="Project Position" name="position" onChange={readInformationProyect} defaultValue={position}/>
            </div>
            <div className="campo">
                <label>Description:</label>
                <input type="text" placeholder="Project Position" name="description" onChange={readInformationProyect} defaultValue={description}/>
            </div>
           
            <div className="campo">
                {imagen?(
                    <img src={`http://localhost:5000/${imagen}`} alt="" height="300px"></img>
                )
                :null
                }
                <label>Imagen:</label>
                <input type="file" placeholder="Project Image" name="imagen" onChange={readFile}/>
            </div>
            
            <div className="enviar">
                <input type="submit" className="btn btn-info" defaultValue="Editar Proyecto"/>

            </div>
            <Link to="/portfolio">
                <Button></Button>
            </Link>
        </form>

    </Fragment> 
     );
}
 
export default withRouter(EditProject);