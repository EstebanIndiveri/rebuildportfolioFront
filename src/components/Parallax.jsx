import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../assets/background.jpg";
// import dev from '../assets/devorange.png';
import dev from '../assets/opimg/devorange.webp';

import textImage from "../assets/opimg/texto.webp";
// import textImage from "../assets/texto.png";

// import astronautImage from "../assets/astronaut.png";
// import planet1Image from "../assets/planet1.png";
// import planet2Image from "../assets/planet2.png";
// import rocketImage from "../assets/rocket.png";

const layers = [
  {
    name: "text",
    image: textImage,
    dataDepth: "0.3",
    height:"500px"
  },
  {
    name: "astronaut",
    image: dev,
    dataDepth: "0.6",
    height:"50px"
  },
//   {
//     name: "planet1",
//     image: planet1Image,
//     dataDepth: "1"
//   },
//   {
//     name: "planet2",
//     image: planet2Image,
//     dataDepth: "-1"
//   },
//   {
//     name: "rocket",
//     image: rocketImage,
//     dataDepth: "0.5"
//   }
];

const Container = styled.div`
	width: 100%;
	/* height: calc(100vh - 70px); */
  display: flex;
  justify-content: center;
  align-items: center;
	/* overflow: hidden; */
	background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding:0;
  margin:0;

  img{
    left: 92px !important;
    top: -55px !important;
    height: 600px;
      @media(max-width:1100px){
        height:500px;
        left: 100px !important; 
        top: 10px !important;
      }
      @media(max-width:910px){
        height:450px;
        left: 90px !important; 
        top: 30px !important;
      }
      @media(max-width:850px){
        height:400px;
        left: 50px !important; 
        top: 30px !important;
      }
      &:nth-child(2){
        height:100px;
        top:400px !important;
        left:400px !important;
      }
  }
 
  @media(max-width:768px){
        display:none;
      }
      
`;

const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    //  <Container backgroundImage={textImage}>

     <Container >

      <div id="scene">
        {layers.map((l, index) => (
          <img
            key={index}
            data-depth={l.dataDepth}
            src={l.image}
            alt={l.name}
            height={l.height}
          />
        ))}
      </div>
    </Container>
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string,
      height:PropTypes.string
    })
  )
};

ParallaxImagesContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers
};

export default ParallaxImagesContainer;
