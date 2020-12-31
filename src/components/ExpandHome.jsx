import React, { Fragment } from 'react';
import { Col, Container,Row } from 'reactstrap';
import ListSkills from './ListSkills/ListSkills';

import './ExpandHome.scss';

const ExpandHome = () => {
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
                            <ListSkills/>
                        </Col>
                    </Row>
                </Container>
            
        </Fragment>
     );
}
 
export default ExpandHome;