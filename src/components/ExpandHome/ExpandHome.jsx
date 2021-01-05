import React, { Fragment,useState } from 'react';
import { Col, Container,Row } from 'reactstrap';
import './ExpandHome.scss';
import QuickSectionProducts from '../QuickSectionProducts/QuickSectionProducts';
// import { Refresh } from './MotionAnime/Refresh';
import { Example } from '../MotionAnime/MotionAnime';
// import ParallaxImage from './Parallax';
// import ParallaxImagesContainer from './Parallax';
import flutter from '../../assets/90deg/flutter.png';
import reactlogo from '../../assets/90deg/react.png';
import angularlogo from '../../assets/90deg/angular.png';
import angular from '../../assets/angular.png';
import flutterLog from '../../assets/flutter.png'
import reactLog from '../../assets/react-logo.png'
import ServicesOffered from '../servicesOffered/ServicesOffered';
import ListSkills from '../ListSkills/ListSkills';


const ExpandHome = () => {
    // const [count, setCount] = useState(0);
    const[openList,setOpenList]=useState(false);
    const[color,setColor]=useState('');
    // console.log(color);
    // console.log(openList);
    const [logo,setLogo]=useState(false);
    return ( 
        <Fragment>
            <div className="clearfix">
            </div>
                <Container className="expandHome">
                    <Row>
                        <Col md="12" xs="12" sm="12" lg="6">
                            <div className="mt-5">
                                <h1 className=" expandTitle" >Make your projects real!</h1>
                            </div>
                            <div className="paragraph">
                            <p className="mt-5">My name is Esteban Indiveri and I am an experienced software engineer and freelance developer.

                                I have a experience working on a wide range of technologies C#, Kotlin, Flutter, Javascript creating modern mobile and web applications using Frameworks like React and Angular.

                               Throughout my career, I have acquired advanced technical knowledge. I invite you to contact with me and work together.</p>
                            </div>
                        </Col>
                        <Col md="12" xs="12" sm="12" lg="6" className="lista">
                            <ListSkills openList={openList} setOpenList={setOpenList}/>
                        </Col>
                    </Row>
                    <div className={`clearfix  d-flex ${openList? 'invisible':'visible'}`} >
                    {/* <Refresh onClick={() => setCount(count + 1)} /> */}
                    <div className="example-container" style={{width:"100%",margin:"0 auto",display:'flex',textAlign:'center',justifyContent:'center'}}>
                        <Example  color={color} setColor={setColor} logo={logo} setLogo={setLogo}/>
                    </div>
                    <div className="text-center" style={{width:"100%",margin:"0 auto",display:"flex",justifyContent:"center"}}>
                    <img 
                    onMouseEnter={() => {setColor("#e9f7fa");setLogo(reactLog)}} 
                    onMouseLeave={() => {setColor("");setLogo(false)}} 
                    className="rotated" src={reactlogo} alt="" height="120px" ></img>   
                    <img  
                    onMouseEnter={() => {setColor("#fdfdfd");setLogo(flutterLog)}} 
                    onMouseLeave={() => {setColor("");setLogo(false)}} 
                    className="rotated" src={flutter} alt="" height="120px" ></img> 
                    <img 
                    onMouseEnter={() => {setColor("#B52E31");setLogo(angular)}} 
                    onMouseLeave={() => {setColor("");setLogo(false)}} 
                    
                    className="rotated" src={angularlogo} alt="" height="120px" ></img>   
                    </div>
                </div>
                <ServicesOffered/>
                <QuickSectionProducts/>

                </Container>

        </Fragment>
     );
}
 
export default ExpandHome;