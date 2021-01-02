import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap';
import './ServicesOffered.scss';

const ServicesOffered = () => {
    return ( 
        <Fragment>
        <Row>
            <Col
            className="servicesContainer"
            sm={12} xs={12} md={12} lg={12}
            >
            <div className="ad">
           <img width="128" height="128" src="https://www.tinkapp.com/wp-content/uploads/2020/05/1470399674_App_Development.png" className="attachment-full size-full lazyloaded" alt="" sizes="(max-width: 128px) 100vw, 128px" srcSet="https://www.tinkapp.com/wp-content/uploads/2020/05/1470399674_App_Development.png 128w, https://www.tinkapp.com/wp-content/uploads/2020/05/1470399674_App_Development-100x100.png 100w" />
        </div>
            
            </Col>
        </Row>
        </Fragment>
     );
}
 
export default ServicesOffered;