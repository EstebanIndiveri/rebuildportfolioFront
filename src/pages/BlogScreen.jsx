import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ParallaxImagesContainer from '../components/Parallax';

const BlogScreen = () => {
    return ( 
        <div>
            <Container>
            <Row md={12}>
              
                <Col md={12} sm={12}>
                    <ParallaxImagesContainer/>
                    <div>
                        <h1>TITLE</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae placeat vel sed sit ipsum explicabo, aliquid nobis similique eius qui illo eligendi eaque voluptas, iste voluptate. Reiciendis facere et cum quaerat pariatur molestias, accusamus tempora ullam reprehenderit delectus perferendis.</p>
                    </div>
                </Col>
                
            </Row>
            </Container>
        </div>
     );
}
 
export default BlogScreen;