import React,{useState,useEffect,useRef} from 'react'
import './Portfolioscreen.scss';

import styled from '@emotion/styled';
import Titles from '../../assets/projectorange.png'
// import ProjectsList from '../../components/Projects/ProjectsList';

// import Projects from '../../components/Project/Projects';

import ProjectsBorrador from '../../components/Project/ProjectsBorrador';

import {List} from '../../components/Project/test/List';
import { motion } from 'framer-motion';

// import Projects from '../../components/Projects/Projects';
/* background-image:url(${bk});
// import bk from '../../assets/bk.png'
*/

const Background=styled.div`
min-height:122vh;

`;
const TitleContainer=styled.div`
    margin-bottom:-8rem;
`;

const Title=styled.img`
    display:block;
    margin:0 auto;
    margin-top:-13rem;
    height:80%;
    width:60%;
    @media(min-width:1280px){
        margin-top:-14rem;
    }
    @media (max-width:1430px){
        margin-top:-8rem;
        margin-bottom:5rem;
    }
    @media(max-width:990px){
        margin-top:-5rem;
        margin-bottom:2rem;
    }
    @media(max-width:850px){
        margin-top:-5rem;
        margin-bottom:4rem;
    }
    @media(max-width: 475px){
        margin-top:-3rem;
    }
    
`;

const PortfolioScreen = () => {
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (prevScrollY.current < currentScrollY && goingUp) {
            setGoingUp(false);
          }
          if (prevScrollY.current > currentScrollY && !goingUp) {
            setGoingUp(true);
          }
          prevScrollY.current = currentScrollY;
          console.log(goingUp, currentScrollY,prevScrollY);
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, [goingUp]);

    const scroll = (component) => {
        if(component){
            const section = document.querySelector( component );
            if(section){
                section.scrollIntoView( { behavior: 'smooth' } );


                const ready=document.querySelector(component);
                ready.classList.add('animate__fadeIn','animate__slower');

                setTimeout(() => {
                    ready.classList.remove( 'animate__fadeIn','animate__slower')
                }, 3000);
            }
        };
      };


    return ( 
      
                // <div id="projects" style={{background:'black'}}>
                    <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 1,}}>
                <div style={{height:'120vh'}}>
                <TitleContainer>
                     <Title alt="" src={Titles} className="animate__animated animate__slideInRight "/>
                 </TitleContainer>
                 <p className="text-center portfolioSubTitle animate__animated animate__fadeIn animate__delay-1s">these are some of my projects</p>
                 <section id="section10" className="demo fade-in-slowx2">
                     <div onClick={()=>scroll('#projects')}><span></span>Scroll</div>
                 </section>
                </div>
                 <motion.div id="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 1.2}}>
                    <List />
                    </motion.div>
                </motion.div>
                // </div>

        //</div>
     );
}
 
export default PortfolioScreen;

  // <div className="animate__animated animate__fadeIn ">
        //     <Background className="animate__animated animate__fadeIn">
        //         <TitleContainer>
        //             <Title alt="" src={Titles} className="animate__animated animate__slideInRight "/>
        //         </TitleContainer>
        //         <p className="text-center portfolioSubTitle animate__animated animate__fadeIn animate__delay-1s">these are some of my projects</p>
        //         <section id="section10" className="demo fade-in-slowx2">
        //             <div onClick={()=>scroll('#projects')}><span></span>Scroll</div>
        //         </section>
        //         </Background>

                // {/* <div id="projects" className="projectscontainer animate__animated ">
                //     {!goingUp&&prevScrollY.current===738?
                //     (<div className="animate__animated animate__rotateIn"style={{background:"red",height:"100px",position:"fixed",bottom:'0', width: '100%'}}>estamos arriba de 338</div>)
                //     :
                //     (<div className="animate__animated animate__fadeOut" style={{background:"red",height:"100px",position:"fixed",bottom:'0', width: '100%'}}>estamos arriba de 338</div>)
                //     }
                // </div> */}
                // {/* <div> */}
                //     {/* <ProjectsList publisher='Marvel Comics'/> */}
                //     {/* <Projects/> */}
                //     {/* <ProjectsBorrador/> */}
                // {/* </div> */}
