import React from 'react'
import { Col, Container, Row } from 'reactstrap';


const ContactScreen = () => {
    return ( 
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center">Contactame</h1>
            <form>
                <input type="text"/>
                <label> Vamos !</label>
                </form>
                    
                    </Col>
                </Row>
            </Container>
           

     );
}
 
export default ContactScreen;