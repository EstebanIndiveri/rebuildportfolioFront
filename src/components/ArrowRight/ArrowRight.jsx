import React, { Fragment } from 'react';

import './ArrowRight.scss';

const ArrowRight = () => {
    return ( 
        <Fragment>
            <div className="link animate__animated animate__fadeIn animate__delay-3s" style={{ position:"relative",top:"0px",cursor:'pointer'}}  alt="" onClick={()=>alert('srolleando')}>
                <span className="link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span className="link__line"></span>
                <span className="link__text">Projects</span>
            </div>
        </Fragment>
     );
}
 
export default ArrowRight;