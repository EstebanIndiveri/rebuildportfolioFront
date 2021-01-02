import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap';
import './ServicesOffered.scss';
import price from '../../assets/competitive.png';
import testing from '../../assets/testing.png';
import support from '../../assets/support.png';
import brand from '../../assets/brand.png';
import quick from '../../assets/results.png';
import seo from '../../assets/seo.png';






const ServicesOffered = () => {
    return ( 
        <Fragment>
        <Row className="totalservices">
            <Col
            className="servicesContainer"
            sm={12} xs={12} md={12} lg={12}
            >
           
                <div class="servicios contenedor">
                    <div class="servicio">
                        <h2>Competitive &nbsp; price</h2>
                        {/* <i class="fas fa-leaf"></i> */}
                        <img height="128px" width="128px" src={price} alt=""></img>
                        <p>Most competitive price of all, quality warranted</p>
                    </div>

                    <div class="servicio">
                        <h2>QA test</h2>
                        {/* <i class="far fa-lemon"></i> */}
                        <img height="128px" width="128px" src={testing} alt=""></img>
                        <p>Testing all your projects, Manual/Automation, bugs report</p>
                    </div>

                    <div class="servicio">
                        <h2>24/7/365 Support</h2>
                        {/* <i class="fas fa-shopping-bag"></i> */}
                        <img height="128px" width="128px" src={support} alt=""></img>
                        <p>Support and maintenance for your applications</p>
                    </div>
                </div>
            </Col>
            <Col
            className="servicesContainer1"
            sm={12} xs={12} md={12} lg={12}
            >
           
                <div class="servicios contenedor">
                    <div class="servicio">
                        <h2>Brand Design</h2>
                        <img height="128px" width="128px" src={brand} alt=""></img>
                        {/* <i class="fas fa-leaf"></i> */}
                        <p>Create your distinctive product brand</p>
                    </div>

                    <div class="servicio">
                        <h2>Quick Results</h2>
                        <img height="128px" width="128px" src={quick} alt=""></img>
                        {/* <i class="far fa-lemon"></i> */}
                        <p>Fast and quality work with the best value for your money</p>
                    </div>

                    <div class="servicio">
                        <h2>Seo &nbsp; position</h2>
                        <img height="128px" width="128px" src={seo} alt=""></img>
                        {/* <i class="fas fa-shopping-bag"></i> */}
                        <p>Add position and value for your website on browsers</p>
                    </div>
                </div>
            </Col>
           
        </Row>
        </Fragment>
     );
}
 
export default ServicesOffered;