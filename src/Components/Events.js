import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'

function Event(props) {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const renderEvent =  props.data.services.map(event =>
        <div data-aos="flip-right" key={event.id} className="EventCard" id="Event">
            <img onClick={()=>window.location.href=event.link} src={event.icon} />
        </div>
    )

    return (
        renderEvent
    );
}

export default Event;
