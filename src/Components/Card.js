import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'
function Card(props) {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const renderCard = props.data.services.map(service =>
        <div data-aos="flip-right" key={service.id} id="ServiceCard" className="Card">
            <img  src={service.icon} />
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <button onClick={()=>window.location.href=service.link} className="Button" id="Button" >{service.button}</button>
        </div>
    )

    return (
        renderCard
    );
}

export default Card;
