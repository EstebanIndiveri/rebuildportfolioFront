import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTwitter,
    faInstagram,
    faLinkedinIn, 
    faWhatsapp} 
from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const SocialLinks = (props) => {

/* styles components */

const{size,margin="1rem",classname}=props;

let tamanio=size>20? size+'px': '20px';

const Div=styled.div`

display: flex;
/* padding-left: 2.3rem; */
justify-content:center;
font-size:${tamanio};
    svg{
        margin:.2rem;
        transition: transform .3s ease-in-out;
        &:hover{
            transform:translateY(-.2rem);
            cursor:pointer;
        }
    }
`;

const A=styled.a`
text-decoration:none;
color:#8bc9dc;
transition:color .3s ease-in-out;
&:hover{
    color:#7bb3c4;
}
margin-right:${margin};
`;
    return ( 
        <Div className={classname}>
            <A href="https://twitter.com/esteban_tefa" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></A>
            <A href="https://www.instagram.com/estebanindiveri/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></A>
            <A href="https://www.linkedin.com/in/esteban-indiveri/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></A>
            <A href="https://wa.me/543512694707?text=Buenos%20días%20Esteban%20Indiveri%20,%20me%20contacto%20para%20hablar%20sobre%20una%20propuesta%20laboral." target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></A>
        </Div>
     );
}
 
export default SocialLinks;