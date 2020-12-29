import React from 'react'
import './Portfolioscreen.scss';
import bk from '../assets/bk.png'
import styled from '@emotion/styled';
import Titles from '../assets/projects.png'
const Background=styled.div`
background-image:url(${bk});
min-height:122vh;
/* background-repeat:repeat-y; */
/* background-size:cover; */
/* z-index:-9999999; */
/* position:relative; */
/* display:block; */
/* margin-bottom: -40rem; */
`;
const TitleContainer=styled.div`
/* height:100px; */
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
        <div className="animate__animated animate__fadeIn ">
            <Background className="animate__animated animate__fadeIn">
                <TitleContainer>
                    <Title alt="" src={Titles}/>
                </TitleContainer>
                <p className="text-center portfolioSubTitle animate__animated animate__fadeIn animate__delay-1s">these are some of my projects</p>
                <section id="section10" className="demo fade-in-slowx2">
                    <div onClick={()=>scroll('#projects')}><span></span>Scroll</div>
                </section>
                <div id="projects" className="projectscontainer animate__animated fade-in-slow"></div>
                </Background>
        </div>
     );
}
 
export default PortfolioScreen;