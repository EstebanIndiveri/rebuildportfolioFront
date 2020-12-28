import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap';
import DescriptionHome from '../components/DescriptionHome'
import ImageLayout from '../components/ImageLayout';


const HomeScreen = () => {
    return ( 
        <Fragment>
            
            <Container>
            <Row>
                <Col xs="6">
                    <DescriptionHome/>
                </Col>
                <Col xs="6">
                    <ImageLayout/>
                </Col>
            </Row>
            </Container>
            
        </Fragment>
     );
}
 
export default HomeScreen;