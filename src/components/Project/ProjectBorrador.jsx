import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

const ProjectBorrador = ({proyecto}) => {

    // delete proyecto
    const eliminarProyecto=id=>{
        // console.log('eliminando',id);
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            text: "Un proyecto eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText:'No, cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                // eliminar en la res
                clienteAxios.delete(`/proyectos/${id}`)
                .then(res=>{
                    if(res.status===200){
                        Swal.fire(
                            'Eliminado!',
                            res.data.mensaje,
                            'success'
                          )
                    }
                })
            }
          })
    }
    const{nombre,position,location,imagen,description,_id}=proyecto;
    return ( 
        <li>
                    <div>
                        <p> {nombre}</p>
                        <p> {position}</p>
                        <p> {location}</p>
                        <p> {description}</p>
                        {imagen
                        ?
                        (
                        <img src={`${process.env.REACT_APP_ENVPOST}/${imagen}`} alt=""/>
                        // <img src={`http://localhost:5000/${imagen}`} alt=""/>

                        )
                        :
                        null
                        }
                    </div>
                    <div>
                        <Link to={`/projects/editar/${_id}`}>
                        <i className="fas fa-pen-alt"></i>
                            Editar proyecto
                        </Link>
                    </div>
                    <Button
                    type="button"
                    onClick={()=>eliminarProyecto(_id)}
                    >
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </Button>
                </li>
     );
}
 
export default ProjectBorrador;