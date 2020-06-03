import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'


function Image(props) {
  useEffect(() => {
    Aos.init({duration: 2000})
}, [])
    
  return (
    <img data-aos="fade-right" className="JourneyWrapper" src={props.data}/>
  );
}

export default Image;
