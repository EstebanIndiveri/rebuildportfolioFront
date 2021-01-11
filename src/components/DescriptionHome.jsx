import React from 'react'
import Typed from 'react-typed';
import styled from '@emotion/styled';
import SocialLinks from './SocialLinks';

const P=styled.p`
/* text-align:center; */
text-align:justify;
width:70%;
margin:0 auto;
`

const DescriptionHome = () => {
    const roles=['Developer','Full Stack Engineer','UX/UI Designer'];
    
    return ( 
        <div className="mt-5">
            {/* <h1 className="text-center  animate__animated animate__fadeIn animate__delay-1s">Full Stack Developer !</h1> */}
            <div style={{textAlign:"center"}}>
          <Typed
            loop
            typeSpeed={60}
            backSpeed={60}
            strings={roles}
            backDelay={3000}
            loopCount={0}
            showCursor
            // className="self-typed animate__animated animate__fadeIn animate__delay-1s"
            className="self-typed"

            cursorChar="|"
          />
          </div>
            {/* <P className="mt-4 animate__animated animate__fadeIn animate__delay-2s" > */}
            <P className="mt-4 " >

              Hello and welcome to the portfolio website of Esteban Daniel Indiveri.
                Get informed, collaborate and discover projects i was working on this year</P>
            {/* <p className="text-center mt-3 animate__animated animate__fadeIn animate__delay-2s">Come'on, let's take a look on my work.</p> */}
            <p className="text-center mt-3 ">Come'on, let's take a look on my work.</p>

            <div>
              {/* <SocialLinks size={24} classname="animate__animated animate__fadeIn animate__delay-3s"/> */}
              <SocialLinks size={24} />

            </div>
        </div>
     );
}
 
export default DescriptionHome;