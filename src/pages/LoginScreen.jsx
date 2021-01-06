import { Button } from 'reactstrap';
import React from 'react'
const LoginScreen = ({history}) => {
    const handleLogin=()=>{
        history.replace('/home');
    }
    return ( 
        <div className="container mt-5">
        <h1>Login</h1>
            <hr/>
            <Button
            color="secondary"
            onClick={handleLogin}
            >
                Login
            </Button>
        </div>
     );
}
 
export default LoginScreen;