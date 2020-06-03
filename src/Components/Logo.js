import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'


function Logo(props) {
  useEffect(() => {
    Aos.init({duration: 1000})
}, [])
  return (
    (typeof(props.data)) === 'string' 
    ? <img data-aos="fade-up" onClick={()=>window.location.href="./"} src={props.data} /> 
    : props.data.map(logo=><img data-aos="fade-up" src={logo} />
    )   
  )

}

export default Logo;
