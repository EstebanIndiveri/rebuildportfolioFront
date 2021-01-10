import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../config/axios';
import { useState } from 'react';

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


const ContactScreen = () => {
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
        console.log(form);
    }
    const [send, setSend] = useState(false);

    return ( 
            <Container className="mt-5">
                <Row>
        {/* <Title title="Contact us"/> */}
        <Col xs="12" lg="6" md="6">
            <Title>Contacte conmigo</Title>
        <section  className="contact py-5">
        <div className="ml-3 ">
            <form
                // action="https://formspree.io/f/mnqozzkn"
                onSubmit={(e)=>e.preventDefault()}
                // method="POST"
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

                <ButtonSubmit type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Enviar</ButtonSubmit>
            </form>
        </div>
        </section>
        </Col>
        <Col xs={12} lg={6} md={6}>
            <h1 className="text-center">other ways to contact</h1>
            <div>{process.env.REACT_APP_TOTTALY_NOT_SECRET}</div>
        </Col>
        </Row>
            </Container>
           

     );
}
 
export default ContactScreen;