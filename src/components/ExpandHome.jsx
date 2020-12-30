import React, { Fragment } from 'react';
import { Col, Container,Row } from 'reactstrap';
import ListSkills from './ListSkills/ListSkills';


const ExpandHome = () => {
    return ( 
        <Fragment>
            <div className="clearfix">
            </div>
                <Container >
                    <Row>
                        <Col md="12" xs="12" sm="12" lg="6">
                            <div className="mt-5">
                                <h1>Make your projects real!</h1>
                            </div>
                        </Col>
                        <Col md="12" xs="12" sm="12" lg="6" className="lista">
                            <ListSkills/>
                        </Col>
                      

                    </Row>
                </Container>
            
        </Fragment>
     );
}
 
export default ExpandHome;