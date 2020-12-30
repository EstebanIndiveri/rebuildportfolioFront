import React, { Fragment } from 'react';

import './ButtonRetro.scss';


const ButttonRetro = () => {
    return ( 
        <Fragment>

<section id="intro">

  <div id="intro-content" className="center-content">

    <div className="center-content-inner">

      <div className="content-section content-section-margin">

        <div className="content-section-grid clearfix">
        
        <a href="/#" className="button nav-link">

          <div className="bottom"></div>

          <div className="top">

          <div className="label pl-2 pr-2">Start</div>
            
        		<div className="button-border button-border-left"></div>
        	  <div className="button-border button-border-top"></div>
        	  <div className="button-border button-border-right"></div>
        		<div className="button-border button-border-bottom"></div>

          </div>

        	</a>

        </div>

       </div>

      </div>

     </div>

  </section>
  </Fragment>
     );
}
 
export default ButttonRetro;