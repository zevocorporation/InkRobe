import React from 'react';
import FooterLinks from '../Components/FooterLinks';

import '../CSS/Footer.css'

function CTA(props) {

    return (
        <React.Fragment >
        <div id="FooterWrapper" className="Wrapper">
            <FooterLinks data={props.data} />
            <div className="copyright">
            <p>© 2020 InkRobe. All Rights Reserved</p>
            <p>Developed by Zevo Corporation</p>
            </div>
        </div>
      </React.Fragment>
    );
}

export default CTA;
