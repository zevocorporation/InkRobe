import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'

function Button(props) {
  useEffect(() => {
    Aos.init({duration: 1000})
}, [])

  return (
    <button data-aos="fade-down" className="Button">{props.name}</button>
  );
}

export default Button;
