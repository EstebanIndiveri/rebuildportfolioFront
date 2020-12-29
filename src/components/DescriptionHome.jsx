import React from 'react'
import Typed from 'react-typed';

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
            className="self-typed animate__animated animate__fadeIn animate__delay-1s"
            cursorChar="|"
          />
          </div>
            <p className="mt-4 text-center text-center text-lowercase  animate__animated animate__fadeIn animate__delay-2s" >WELCOME TO THE PORTFOLIO WEBSITE OF ESTEBAN INDIVERI.
                GET INFORMED, COLLABORATE AND DISCOVER PROJECTS I WAS WORKING ON THIS YEAR</p>
        </div>
     );
}
 
export default DescriptionHome;