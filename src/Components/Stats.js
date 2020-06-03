import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'

import { Spring } from 'react-spring/renderprops'


function Stats(props) {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const renderStats = props.data.map(data =>
                <div style={props} key={data.id} id="StatsCard">
                <h1 data-aos="fade-up">{data.count}</h1>
                <h5 data-aos="fade-down">{data.name}</h5>
                <img data-aos="fade-down"src={data.bar} />
                <a href={data.link}>{data.button}</a>
                </div>
    )

    return (
   
        renderStats
    );
}

export default Stats;
