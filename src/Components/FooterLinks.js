import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'

import Linkedin from '../img/Linkedin.svg'
import Facebook from '../img/Facebook.svg'
import Indiamart from '../img/Indiamart.jpg'

function Card(props) {

    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    const renderConnections = props.data.connections.map(data =>
        <div id="FooterSocial" className="Social">
            <a href={data.linkedin}><img src={Linkedin}/></a>
            <a href={data.facebook}><img src={Facebook}/></a>
            <a className="im" href={data.indiamart} ><img  src={Indiamart}/></a>
    </div>
    )

    const renderLogo = <img className="FooterLogo" src={props.data.logo} /> 

    const renderAddresses = props.data.addresses.map(data =>
        <div id="Addresses" >
            <h4>{data.name}</h4>
            <p>{data.address}</p>
        </div>
    )

    const renderCard = props.data.links.map(link =>
        <div key={link.id} id="FooterLinks" className="Card">
            <h4>{link.name}</h4>
            {link.footerlinks.map(footerlink => 
            <a href={footerlink.href}>{footerlink.name}</a>
            )}
        </div>
    )

    return (
        <React.Fragment>
        <div id="Logo">{renderLogo}</div>
        <div className="AddressWrapper">{renderAddresses}</div>
        {renderConnections}
        {renderCard}
        </React.Fragment>
        
    );
}

export default Card;
