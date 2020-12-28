import React, { Fragment } from 'react'
import Footer from '../Footer';
import Navbar from '../NavBar';
const Layout = ({children}) => {
    return ( 
        <Fragment>
            <Navbar/>
            {children}
            <Footer/>
        </Fragment>
     );
}
 
export default Layout;