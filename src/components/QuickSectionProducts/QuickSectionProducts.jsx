import React from 'react';

import './QuickSectionProducts.scss';

const QuickSectionProducts = () => {
    return ( 
        <section class="sectionQuickProducts">
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