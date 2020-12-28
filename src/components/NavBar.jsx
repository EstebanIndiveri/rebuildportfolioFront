import React, { Fragment,useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {
    Collapse,
    Navbar as Navi,
    NavbarToggler,
    // NavbarBrand,
    // NavLink,
    Nav,
    NavItem,
  } from 'reactstrap';
import './Navbar.scss';


const ButtonSignIn=styled.button`
display:block;
text-align:center;
justify-content:center;
align-items:center;
background: #FFFFFF;
box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
border:none !important;
border-radius: 18px;
color: #323232 !important;
padding:.8rem 1.1rem;
transition:all 500ms ease-in-out;
&:hover{
    box-shadow: 2px 1px 6px rgba(0, 0, 0, 0.5);
}
&:focus{
        outline:none !important;
    }
`;

const ButtonBlue=styled.button`
display:block;
text-align:center;
justify-content:center;
align-items:center;
outline:none;
border:none;
background: rgba(177, 200, 204, 0.514);
box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
border:none !important;
border-radius: 18px;
color: rgba(55, 188, 228, 0.719) !important;
padding:.8rem 1.1rem;
transition:all 500ms ease-in-out;
    &:hover{
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.45);
    }
    &:focus{
        outline:none !important;
    }
`;
const DotSpan=styled.span`
color:#8BC9DC;
font-size:2rem ;
font-weight:bold;
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <Fragment>
               <Navi id="nave" className="navbarcomponent responsive1" color="light" light expand="md">
                    <Link 
                        className="navbar-brand port-navbar-brand logo" 
                        to="/"
                            >
                        Esteban Indiveri <DotSpan>.</DotSpan>
                    </Link>
                     <NavbarToggler onClick={toggle} />
                     <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="port-navbar-item blog" >
                            <Link className="nav-link port-navbar-link" to="/home">Home</Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <Link className="nav-link port-navbar-link" to="/portfolio">portfolio</Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <Link className="nav-link port-navbar-link" to="/blog">Blog</Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <Link className="nav-link port-navbar-link" to="/contact">Contact</Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <Link to="/login" class="text-decoration-none">
                                <ButtonSignIn outline color="warning">Sign In</ButtonSignIn>
                            </Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                                <ButtonBlue Button className="text-white" color="warning" onClick={()=>alert('comming soon')}>Log In</ButtonBlue>
                        </NavItem>

                        </Nav>
                            </Collapse>
                </Navi>
        </Fragment>
    )
}
export default Navbar;