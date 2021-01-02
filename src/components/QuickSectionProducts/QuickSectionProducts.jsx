import React from 'react';
import styled from '@emotion/styled';

import './QuickSectionProducts.scss';

const ContainerWave2=styled.div`
position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
`;

const QuickSectionProducts = () => {
    return ( 
        <section class="sectionQuickProducts">
          <ContainerWave2 className="fade-in-slowx2">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4c6d70" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,234.7C672,245,768,267,864,240C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#323232" fill-opacity="1" d="M0,192L360,32L720,256L1080,0L1440,64L1440,320L1080,320L720,320L360,320L0,320Z" ></path></svg>
            </ContainerWave2>
        <div class="titleProducts">
          <h3 class="message">Make with &nbsp; &nbsp;<i class="fas fa-heart"></i></h3>
          <h1 class="title">Our Work</h1>
          <div class="underline"></div>
        </div>
        <div class="productList">
          <div class="productWrapper">
            <div class="image gatsby-image-wrapper">
            <img src="https://i.ibb.co/64fzTV2/Home-Back-Roads-1.gif" alt="menu"/>
            </div>
              <div class="text">
                <div class="product-content">
                  <h3 class="name">BackRoads Blog</h3>
                  <h3 class="price">Gatsby Js</h3>
                </div>
                <p class="info">Blog travel Project created with React and Gatsby with Graphql</p>
              </div>
          </div>
    
          <div class="productWrapper">
           <div class="image gatsby-image-wrapper">
            <img src="https://i.ibb.co/qY3rDzK/Tripnsleep1.gif" alt="menu"/>
            </div>
              <div class="text">
                <div class="product-content">
                  <h3 class="name">TravelApp</h3>
                  <h3 class="price">Ionic</h3>
                </div>
                <p class="info">Travelapp project created with Ionic Framework using google maps and paypal api</p>
              </div>
          </div>
    
          <div class="productWrapper">
            <div class="image gatsby-image-wrapper">
              <img src="https://i.ibb.co/PD5NxDL/gifpersonal.gif" alt="menu"/>
              </div>
              <div class="text">
                <div class="product-content">
                  <h3 class="name">Course Web</h3>
                  <h3 class="price">React js</h3>
                </div>
                <p class="info">Course webapp created with React Sass and Mongodb</p>
              </div>
          </div>
    
          <div class="productWrapper">
            <div class="image gatsby-image-wrapper">
              <img src="https://i.ibb.co/z58bqN9/Mercado-Pago-Certified-Developer-OP-esteban-indiveri-1-page-0001.jpg" alt="menu"/>
              
              </div>
              <div class="text">
                <div class="product-content">
                  <h3 class="name">Coffe page</h3>
                  <h3 class="price">Gatsby JS</h3>
                </div>
                <p class="info">Coffe webpage created with Gatbsy js using paypal api</p>
              </div>
          </div>
        </div>
      </section>
     );
}
 
export default QuickSectionProducts;
// https://i.ibb.co/BLGKHsw/Home-Regular-Ind-s.gif
// https://i.ibb.co/z58bqN9/Mercado-Pago-Certified-Developer-OP-esteban-indiveri-1-page-0001.jpg