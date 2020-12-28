import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap';
import ArrowRight from '../../components/ArrowRight/ArrowRight';
import DescriptionHome from '../../components/DescriptionHome'
import ImageLayout from '../../components/ImageLayout';
import {css} from '@emotion/react';

import './HomeScreen.scss';

const HomeScreen = () => {
    return ( 
        <Fragment>
            
            <Container className="fade-in-fast">
            <Row>
                <Col xs="12" md="6">
                    <div css={css`
                    height:100vh;
                    `}>
                    <ArrowRight/>
                    <DescriptionHome/>

                    </div>
                </Col>
                <Col xs="12" md="6">
                        <ImageLayout/>
                </Col>
                {/* <Col xs="1"> */}
                {/* </Col> */}
            </Row>
            </Container>
            
        </Fragment>
     );
}
 
export default HomeScreen;