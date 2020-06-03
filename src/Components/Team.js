import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'

import Linkedin from '../img/Linkedin.svg'
import Facebook from '../img/Facebook.svg'
import Twitter from '../img/Twitter.svg'
import Instagram from '../img/Instagram.svg'


function Team(props) {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const renderTeam = props.data.map(data =>
        <div data-aos="flip-right" key={data.id} id="TeamCard">
            <div className="Circle">
            <img src={data.image} />
            </div>
            <h4>{data.name}</h4>
            <p>{data.designation}</p>
            <div className="Social">
            <a href={data.linkedin}><img src={Linkedin}/></a>
            <a href={data.linkedin}><img src={Facebook}/></a>
            <a  href={data.twitter}><img src={Twitter}/></a>
            <a href={data.instagram} ><img  src={Instagram}/></a>
            </div>
        </div>
    )

    return (
        renderTeam
    );
}

export default Team;
