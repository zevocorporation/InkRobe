import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'

function Card(props) {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const renderCard = props.data.services.map(service =>
        <div key={service.id} className="Card" id="AboutCard">
            <img data-aos="fade-up" src={service.icon} />
            <h5 data-aos="fade-down">{service.name}</h5>
            <p>{service.description}</p>
        </div>
    )

    return (
        renderCard
    );
}

export default Card;
