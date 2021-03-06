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


// const ButtonSignIn=styled.button`
// display:block;
// text-align:center;
// justify-content:center;
// align-items:center;
// background: #FFFFFF;
// box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
// border:none !important;
// border-radius: 18px;
// color: #323232 !important;
// padding:.8rem 1.1rem;
// transition:all 500ms ease-in-out;
// &:hover{
//     box-shadow: 2px 1px 6px rgba(0, 0, 0, 0.5);
// }
// &:focus{
//         outline:none !important;
//     }
// `;

// const ButtonBlue=styled.button`
// display:block;
// text-align:center;
// justify-content:center;
// align-items:center;
// outline:none;
// border:none;
// background: rgba(177, 200, 204, 0.514);
// box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
// border:none !important;
// border-radius: 18px;
// color: rgba(55, 188, 228, 0.719) !important;
// padding:.8rem 1.1rem;
// transition:all 500ms ease-in-out;
//     &:hover{
//     box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.45);
//     }
//     &:focus{
//         outline:none !important;
//     }
// `;
const DotSpan=styled.span`
color:#8BC9DC;
font-size:2rem ;
font-weight:bold;
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const cleanNav=(isOpen)=>{
    if(isOpen===false){
        return
    }
    if(isOpen===true){
        setIsOpen(false);
        // console.log(isOpen);
    }
  }
    return (
        <Fragment>
               <Navi id="nave" className="navbarcomponent responsive1 vintage "  color="light" light expand="md">
                    <Link 
                        className="navbar-brand port-navbar-brand logo" 
                        to="/"
                            >
                        Esteban Indiveri <DotSpan>.</DotSpan>
                    </Link>
                     <NavbarToggler onClick={toggle} />
                     <Collapse isOpen={isOpen} navbar onClick={()=>cleanNav(isOpen)}>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="port-navbar-item blog" >
                            <Link className={window.location.hash==="#/home"?"nav-link port-navbar-link activado":"nav-link port-navbar-link noactivado" } to="/home">Home</Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <Link className={window.location.hash==="#/portfolio"?"nav-link port-navbar-link activado":"nav-link port-navbar-link noactivado" } to="/portfolio">portfolio</Link>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <Link className={window.location.hash==="#/about"?"nav-link port-navbar-link activado":"nav-link port-navbar-link noactivado" } to="/about" >About</Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <Link className={window.location.hash==="#/blog"?"nav-link port-navbar-link activado":"nav-link port-navbar-link noactivado" } to="/blog">Blog</Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <Link className={window.location.hash==="#/contact"?"nav-link port-navbar-link activado":"nav-link port-navbar-link noactivado" } to="/contact">Contact</Link>
                        </NavItem>

                        {/* <NavItem className="port-navbar-item">
                            <Link to="/login" className="text-decoration-none">
                                <ButtonSignIn outline color="warning">Sign In</ButtonSignIn>
                            </Link>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                                <ButtonBlue Button className="text-white" color="warning" onClick={()=>alert('comming soon')}>Log In</ButtonBlue>
                        </NavItem> */}

                        </Nav>
                            </Collapse>
                </Navi>
        </Fragment>
    )
}
export default Navbar;