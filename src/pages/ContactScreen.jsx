import React,{Fragment, useState} from 'react'
import { Col, Container, Row} from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../config/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Title=styled.h1`
    font-size:2.3rem;
    margin:0;
    padding:0;
    color:#8BC9DC;
`;

const Label=styled.label`
    color:#8BC9DC;
    font-weight:500;
`;

const Input=styled.input`
border-color:#8bc9dc;
transition:border-color box-shadow 300ms ease-in-out;
&:focus{
    border:none;
    box-shadow:0px 0px 5px #f5b46b !important;
}
`;
const TextArea=styled.textarea`
border-color:#8bc9dc;

&:focus{
    border:none;
    box-shadow:0px 0px 5px #f5b46b !important;
}
`;

const ButtonSubmit=styled.button`
    border:1px solid #8bc9dc;
    color:#8f8f8f;
    transition:background-color 300ms ease-in-out;
    border-radius:10px;
    &:focus{
        outline:none;
    }
    &:hover{
        background-color:#8bc9dc;
        color:white;
    }
    @media(max-width:768px){
        margin-bottom:3rem;
    }
`;
const DivList=styled.div`
    align-items:center;
    text-align:center;
    margin-top:2.5rem;
    ul{
        font-size:1.2rem;
        li{
            margin-bottom:10px !important;
        }
    }
`;


const ContactScreen = () => {
    const [send, setSend] = useState(false);
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleInputChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
        if(form.email===''||form.name===''||form.message===''){
            setSend(false);
            console.log(send);
        }
        setSend(true);

    }

    const handleSubmitForm=async e=>{
        e.preventDefault();
        try {
            setSend(true);
            const resp=await clienteAxios.post('/sendemail',form,{
                headers:{
                    'Content-type':'application/json'
                }
            });
            console.log(resp);
            if(resp.status===200){
            setSend(false);
                setTimeout(() => {
                    resetForm();
                }, 1000);
                toast.dark('🦄 Your Email was send!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        } catch (error) {
            console.log(error);
            toast.warn("🦄 We can't send your email, try again!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    const resetForm=()=>{
        setForm({
        name:'',
        email:'',
        message:''
        });
    }

    return ( 
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
            <Container className="mt-5">
                <Row>
        {/* <Title title="Contact us"/> */}
        <Col xs="12" lg="6" md="6">
            <Title>Contacte conmigo</Title>
        <section  className="contact py-5">
        <div className="ml-3 ">
            <form
                // action="https://formspree.io/f/mnqozzkn"
                onSubmit={handleSubmitForm}
                method="POST"
                >
                <div className="form-group">
                    <Label htmlFor="name">Nombre</Label>
                    <Input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    id="name" 
                    placeholder="Ingrese su nombre" 
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    /> 
                </div>

                <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    placeholder="correo@example.com" 
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    /> 
                </div>

                <div className="form-group">
                    <Label htmlFor="message">Consulta</Label>
                    <TextArea 
                    name="message" 
                    id="description" 
                    className="form-control" 
                    rows="5" 
                    placeholder="Su mensaje aquí..."
                    value={form.message}
                    onChange={handleInputChange}
                    />
                </div>

                <ButtonSubmit disabled={!send} type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Enviar</ButtonSubmit>
            </form>
        </div>
        </section>
        </Col>
        <Col xs={12} lg={6} md={6}>
            <h1 className="text-center">other ways to contact</h1>
            <DivList>
                <ul>
                    <li><FontAwesomeIcon className="socialLink" icon={faEnvelopeOpenText} size="lg" color="#8BC9DC" width="30" />Email</li>
                    <li><FontAwesomeIcon className="socialLink" icon={faGithub} size="lg" color="#8BC9DC" width="30" />Github</li>
                    <li><FontAwesomeIcon className="socialLink" icon={faWhatsapp} size="lg" color="#8BC9DC" width="30" />Telephone with api wsp</li>
                    <li><FontAwesomeIcon className="socialLink" icon={faEnvelope} size="lg" color="#8BC9DC" width="30" />secondary email</li>
                </ul>
            </DivList>
        </Col>
        </Row>
            </Container>
            </Fragment>

     );
}
 
export default ContactScreen;