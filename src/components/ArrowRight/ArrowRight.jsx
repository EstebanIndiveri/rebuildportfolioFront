import React, { Fragment } from 'react';
import {useHistory} from 'react-router-dom';

import './ArrowRight.scss';

const ArrowRight = () => {
    const history = useHistory();
    return ( 
        <Fragment>
            <div className="link animate__animated animate__fadeIn animate__delay-3s" style={{ position:"relative",top:"0px",cursor:'pointer'}}  alt="" onClick={()=>history.push('/portfolio')}>
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