import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import ListSkills from './ListSkills/ListSkills';


const ExpandHome = () => {
    return ( 
        <Fragment>
            <div className="clearfix">
            </div>
                {/* <Container> */}
                    <Row>
                        <Col md="4" xs="12">
                            <div>Web design</div>
                        </Col>
                        <Col md="6" xs="12" className="lista">
                            <ListSkills/>
                        </Col>
                      

                    </Row>
                {/* </Container> */}
            
        </Fragment>
     );
}
 
export default ExpandHome;