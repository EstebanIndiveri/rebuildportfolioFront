import React,{useState,useEffect,useRef, Fragment} from 'react'
import './Portfolioscreen.scss';
import styled from '@emotion/styled';
// import Titles from '../../assets/projectorange.png'
// import ProjectsList from '../../components/Projects/ProjectsList';
// import Projects from '../../components/Project/Projects';
// import ProjectsBorrador from '../../components/Project/ProjectsBorrador';
import {List} from '../../components/Project/test/List';
import { AnimatePresence } from 'framer-motion';
import clienteAxios from '../../config/axios';
import { Item } from '../../components/Project/test/Items';
import iphone from '../../assets/3d-phone.png';
// import Projects from '../../components/Projects/Projects';
/* background-image:url(${bk});
// import bk from '../../assets/bk.png'
*/
// const Background=styled.div`
// min-height:122vh;
// `;
const TitleContainer=styled.div`
    /* margin-bottom:-8rem; */
    transform:rotate(-90deg);
    margin-top: 11rem;
    margin-left:9rem;
    /* position:relative; */
    /* height:100%; */
    /* margin-left:-40rem; */
    /* width:100%; */
    @media(max-width: 768px){
      transform:rotate(0deg);
    margin-left:0rem;
    margin-top: 0rem;
    margin-bottom:0rem;

    }
   
`;

// const Title=styled.img`
//     display:block;
//     margin:0 auto;
//     /* margin-top:-13rem; */
//     height:100%;
//     width:100%;
//     @media(max-width: 768px){
//       height:100%;
//     width:60%;

//     }
//     /* @media(min-width:1280px){
//         margin-top:-14rem;
//     }
//     @media (max-width:1430px){
//         margin-top:-8rem;
//         margin-bottom:5rem;
//     }
//     @media(max-width:990px){
//         margin-top:-5rem;
//         margin-bottom:2rem;
//     }
//     @media(max-width:850px){
//         margin-top:-5rem;
//         margin-bottom:4rem;
//     }
//     @media(max-width: 475px){
//         margin-top:-3rem;
//     } */
    
// `;

const PortfolioScreen = ({match}) => {
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(true);
    let { id } = match.params;
    const imageHasLoaded = true;
    const[project,saveProject]=useState({});

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (prevScrollY.current < currentScrollY && goingUp ) {
            setGoingUp(false);
          }
         
          if (prevScrollY.current > currentScrollY && !goingUp) {
            setGoingUp(true);
          }
          prevScrollY.current = currentScrollY;
          // console.log(goingUp, currentScrollY,prevScrollY);
          console.log(goingUp, currentScrollY);

        };
        const consultarApi=async()=>{
            try{
              const productoConsulta=await clienteAxios.get(`/proyectos/${id}`);
              saveProject(productoConsulta.data);
              await project;
              // console.log(project);
  
            }catch(error){
              console.log(error);
            }
          }
          consultarApi();
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line 
      }, [goingUp,id]);

      
      // console.log(over);

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
            //         <motion.div 
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0, transition: { duration: 0.15 } }}
            // transition={{ duration: 1,}}>
            <Fragment>
              <div className="fade-in " id="top" style={{top:'100px',height:'20px'}}>
                <img className="test3d" height="400px" src={iphone} alt=""/></div>
          
                <div style={{height:'120vh',background:'rgba(238, 238, 238, 0.089)'}}>
                  <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12">
                <TitleContainer className="fade-in">
                     {/* <Title alt="" src={Titles} className="animate__animated animate__slideInRight animate__delay-1s "/> */}
                     <h1 className="Titulo90"> Projects</h1>
                 </TitleContainer>
                 </div>
                 <div className="col-6 ee">
                 <p className="text-center portfolioSubTitle animate__animated animate__fadeIn animate__delay-1s">these are some of my projects</p>
                  {/* <div className="fade-in-slow" style={{position:'relative',marginLeft:'22rem',borderRadius:'100%',height:'300px',width:'300px',background:'rgba(206, 206, 206, 0.548)'}}/> */}
                  
                 </div>
                 <section id="section10" className="demo fade-in-slowx2">
                     <div onClick={()=>scroll('#projects')}><span></span>Scroll</div>
                 </section>
                 </div>
                 <div className="fade-in-slow" style={{zIndex:'-999',position:'relative',marginLeft:'52rem',marginTop:'-2rem',borderRadius:'100%',height:'500px',width:'500px',background:'rgba(217,221,230, 0.21) '}}/>
                 {/* rgba(206, 206, 206, 0.548) */}
                {/* rgba(217,221,230, 0.21) */}
                </div>
                
                <div id="projects">
                <List selectedId={id}  />
                {!goingUp?(
                  <div className="fade-in" style={{boxShadow:'0px 0px 7px 1px #323232',transition:'all 300ms ease-in-out',paddingTop:'.4rem',paddingBottom:'.4rem',backgroundColor:"#323232",fontSize:"15px",borderRadius:'15px',width:'100px',position:'fixed',zIndex:'999',bottom:'0',cursor:'pointer'}} onClick={()=>scroll('#top')}>
                    <p className="text-center mb-0 text-white">Back to top</p>
                  </div>
                ):
                  null
                }
                </div>
                
                <AnimatePresence >
                {id && imageHasLoaded &&  <Item id={id} key="item"/>}
                </AnimatePresence>
                </Fragment>


            //      <motion.div id="projects"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0, transition: { duration: 0.15 } }}
            // transition={{ duration: 1.2}}
            // >

            //         <List />
            //         </motion.div>
            //     </motion.div>
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
