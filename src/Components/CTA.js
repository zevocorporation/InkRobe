import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'
function CTA(props) {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <div data-aos="fade-left" className="Card" id="CTA">
            <h2 >{props.data.heading}</h2>
            <p >{props.data.description}</p>
            {props.data.button && <button  id="Button" onClick={()=>window.location.href=props.data.link} className="Button">{props.data.button}</button> }
        </div>
    );
}

export default CTA;
