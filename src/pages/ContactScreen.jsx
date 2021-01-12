import React,{Fragment, useState} from 'react'
import { Col, Container, Row} from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../config/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AnimatedCard from '@rihor/react-3d-card/dist/AnimatedCard';
import image from '../assets/perfil-black.jpg'
import Helmet from 'react-helmet';


const Title=styled.h1`
    font-size:2.3rem;
    margin:0;
    padding:0;
    color:#8BC9DC;
    text-align:center;
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
        a{
            text-decoration:none;
            color:#323232;
        }
        li{
            margin-bottom:12px !important;
            svg{
            transition: transform .3s ease-in-out;
                &:hover{
                    transform:translateY(-.2rem);
                    cursor:pointer;
                }
            }
        }
    }
`;
const TitleOther=styled.h1`
    color:#8bc9dc;
    text-align:center;

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
            // console.log(send);
        }
        setSend(true);

    }

    const handleSubmitForm=async e=>{
        e.preventDefault();
        try {
            setSend(false);
            const resp=await clienteAxios.post('/sendemail',form,{
                headers:{
                    'Content-type':'application/json'
                }
            });
            // console.log(resp);
            if(resp.status===200){
                setSend(true);
                setTimeout(() => {
                    resetForm();
                }, 1000);
                toast.dark('😀 Your Email was send!', {
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
            toast.warn("😧 We can't send your email, try again!", {
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
            <Helmet>
                <title>Contact | Esteban Indiveri</title>
                <meta name="description" content="Let's talk | Esteban Indiveri" data-react-helmet="true"/>
            </Helmet>
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
                <Row className="fade-in">
        {/* <Title title="Contact us"/> */}
        <Col xs="12" lg="6" md="6" >
            <Title>Let's talk</Title>
        <section  className="contact py-5">
        <div className="ml-3 ">
            <form
                onSubmit={handleSubmitForm}
                method="POST"
                >
                <div className="form-group">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    id="name" 
                    placeholder="Insert your name" 
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
                    <Label htmlFor="message">Message</Label>
                    <TextArea 
                    name="message" 
                    id="description" 
                    className="form-control" 
                    rows="5" 
                    required
                    placeholder="Your message here..."
                    value={form.message}
                    onChange={handleInputChange}
                    />
                </div>

                <ButtonSubmit disabled={!send} type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Send</ButtonSubmit>
            </form>
        </div>
        </section>
        </Col>
        <Col xs={12} lg={6} md={6}>
            <TitleOther >other ways to contact</TitleOther>
            <DivList>
                <ul>
                    <a href="mailto:esteban.indiveri@gmail.com" target="_blank" rel="noreferrer"><li><FontAwesomeIcon className="socialLink" icon={faEnvelopeOpenText} size="lg" color="#8BC9DC" width="30" /> &nbsp; Email: esteban.indiveri@gmail.com</li></a>
                    <a href="https://github.com/EstebanIndiveri" target="_blank" rel="noreferrer"><li><FontAwesomeIcon className="socialLink" icon={faGithub} size="lg" color="#8BC9DC" width="30" /> &nbsp; Github: Esteban Indiveri</li></a>
                    <a href="https://wa.me/543512694707?text=Buenos%20días%20Esteban%20Indiveri%20,%20me%20contacto%20para%20hablar%20sobre%20una%20propuesta%20laboral." target="_blank" rel="noreferrer"><li><FontAwesomeIcon className="socialLink" icon={faWhatsapp} size="lg" color="#8BC9DC" width="30" /> &nbsp; Phone: +543512694707</li></a>
                    <a href="https://www.linkedin.com/in/esteban-indiveri/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon className="socialLink" icon={faLinkedin} size="lg" color="#8BC9DC" width="30" /> &nbsp; Linkedin: esteluca89@hotmail.com</li></a>
                </ul>
            </DivList>

            <div style={{width:'80%',margin:'0 auto',marginTop:'2rem'}}>
                <AnimatedCard weight={1} clickable={true}>
                    <div style={{background:"FFF",boxShadow:'1px 1px 5px 2px rgb(244 244 244)',display:'flex',justifyContent:'space-between',alignItems:'center',textAlign:'center',padding:'1rem',borderRadius:'10px'}}>
                    <div>
                    <img style={{opacity:'0.7',borderRadius:'5px'}} src={image} alt="" height="140px"/>
                    </div>
                    <div>
                        <h5>Esteban &nbsp; Indiveri</h5>
                        <hr/>
                        <p style={{marginBottom:'2px'}}>Developer, UX/UI Designer</p>
                        <div>
                            <ul>
                                <li>FrontEnd</li>
                                <li>Backend</li>

                            </ul>
                        </div>
                    </div>
                    </div>
                </AnimatedCard>
            </div>
        </Col>
        </Row>
            </Container>
            </Fragment>

     );
}
 
export default ContactScreen;