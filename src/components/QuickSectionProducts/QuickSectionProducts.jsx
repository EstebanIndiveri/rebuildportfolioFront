import React, { Fragment } from 'react';
// import styled from '@emotion/styled';
import uptasker from '../../assets/opimg/sin2.webp';
// import uptasker from '../../assets/backroads.png';

import regularcoffe from '../../assets/opimg/coffe2.webp';
import tripnsleep from '../../assets/opimg/sin3.webp';
// import tripnsleep from '../../assets/tripnsleep.png';


import courseblog from '../../assets/opimg/courseblog.webp';




import './QuickSectionProducts.scss';

// const ContainerWave2=styled.div`
// position: absolute;
// width: 100%;
//     height: 0rem;
//     padding-top: 0px;
//     margin-bottom: 0;
//     margin-right: -64rem;
//     /* margin-left: -59rem; */
//     padding-bottom: 0;
//     margin-top: 30rem;
//   z-index: -9999999;
//   @media(max-width:1700px){
//     display:none;
//   }
//   `;

const QuickSectionProducts = () => {
    return ( 
      <Fragment>
      {/* <ContainerWave2 className="fade-in-slowx2">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3FEFF" fill-opacity="1" d="M0,192L360,32L720,256L1080,0L1440,64L1440,320L1080,320L720,320L360,320L0,320Z" ></path></svg>
  </ContainerWave2> */}
        <section className="sectionQuickProducts">
        
        <div className="titleProducts">
          <h3 className="message">Make with &nbsp; &nbsp;<i className="fas fa-heart"></i></h3>
          <h1 className="title">Our Work</h1>
          <div className="underline"></div>
        </div>
        <div className="productList">
          <div className="productWrapper">
            <div className="image gatsby-image-wrapper">
            {/* <img src="https://i.ibb.co/64fzTV2/Home-Back-Roads-1.gif"  alt="menu"/> */}
            <img src={uptasker} style={{filter:"brightness(80%"}} alt="menu"/>

            </div>
              <div className="text">
                <div className="product-content">
                  <h3 className="name">BackRoads Blog</h3>
                  <h3 className="price">Gatsby Js</h3>
                </div>
                <p className="info">Blog travel Project created with React and Gatsby with Graphql</p>
              </div>
          </div>
    
          <div className="productWrapper">
           <div className="image gatsby-image-wrapper">
            <img src={tripnsleep} alt="menu" style={{filter:"brightness(80%"}}/>
            {/* <img src="https://i.ibb.co/qY3rDzK/Tripnsleep1.gif" alt="menu"/> */}

            </div>
              <div className="text">
                <div className="product-content">
                  <h3 className="name">TravelApp</h3>
                  <h3 className="price">Ionic</h3>
                </div>
                <p className="info">Travelapp project created with Ionic Framework using google maps and paypal api</p>
              </div>
          </div>
    
          <div className="productWrapper">
            <div className="image gatsby-image-wrapper">
            <img src={courseblog} alt="menu" style={{filter:"brightness(80%"}}/>
              {/* <img src="https://i.ibb.co/PD5NxDL/gifpersonal.gif" alt="menu"/> */}
              </div>
              <div className="text">
                <div className="product-content">
                  <h3 className="name">Course Web</h3>
                  <h3 className="price">React js</h3>
                </div>
                <p className="info">Course webapp created with React Sass and Mongodb</p>
              </div>
          </div>
    
          <div className="productWrapper">
            <div className="image gatsby-image-wrapper">
              <img src={regularcoffe} alt="menu" style={{filter:"brightness(80%"}}/>
              
              </div>
              <div className="text">
                <div className="product-content">
                  <h3 className="name">Coffe page</h3>
                  <h3 className="price">Gatsby JS</h3>
                </div>
                <p className="info">Coffe webpage created with Gatbsy js using paypal api</p>
              </div>
          </div>
        </div>
      </section>
      </Fragment>
     );
}
 
export default QuickSectionProducts;
// https://i.ibb.co/BLGKHsw/Home-Regular-Ind-s.gif
// https://i.ibb.co/z58bqN9/Mercado-Pago-Certified-Developer-OP-esteban-indiveri-1-page-0001.jpg