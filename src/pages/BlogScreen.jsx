import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ParallaxImagesContainer from '../components/Parallax';

const BlogScreen = () => {
    return ( 
        <div>
            <Container>
            <Row md={12}>
                {/* <Col md={4} sm={12}> */}
                    {/* <div style={{height:'calc(100vh - 70px)'}}>
                        <h1>Hola</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus beatae vel est eius quam blanditiis commodi sint numquam velit rerum, tenetur quod? Adipisci facere cumque repellendus voluptates obcaecati suscipit eligendi deserunt quia nostrum praesentium, quo maiores, veritatis esse voluptas. Exercitationem saepe fuga corrupti quod! Dolorum esse repellat eveniet illo similique blanditiis quos, ducimus libero. Quasi nostrum magni quod enim maxime!</p>
                        </div> */}
                {/* </Col> */}
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