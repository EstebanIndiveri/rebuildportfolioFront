import React from 'react'
import text from '../../assets/texto.png'

import './Footer.scss';



const Footer = () => {
    return ( 
        <footer class="footer">
            <div class="contenedor">
                <div class="widget">
                    <h3>Contacto</h3>
                    <p>Tel:3512694707</p>
                    <p>Córdoba, Argentina</p>
                    <p>esteban.indiveri@gmail.com</p>
                </div>
                <div class="widget">
                    <h3>Quick Info</h3>
                    <p>I am a developer dedicated to create the best software, applications and webpage for our customers</p>
                </div>
                <div class="widget">
                    <div class="widget text-center d-flex justify-content-center">
                    <a href="https://wa.me/543512694707?text=Buenos%20días%20Esteban%20Indiveri%20,%20me%20contacto%20para%20hablar%20sobre%20una%20propuesta%20laboral." target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/estebanindiveri/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/esteban-indiveri/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <p class="text-center lastp" ><img id="logoFooter" src={text} alt="No vision"/></p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;