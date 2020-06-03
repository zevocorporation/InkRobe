import React from 'react';
import CTACard from '../Components/CTA';

import '../CSS/CTA.css'

function CTA(props) {

    return (
        <React.Fragment >
        <div id="CTAWrapper" className="Wrapper">
            <CTACard data={props.data} />
          </div>
      </React.Fragment>
    );
}

export default CTA;
