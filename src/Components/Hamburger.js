import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'


import HamburgerImg from '../img/Hamburger.svg'

function Hamburger(props) {

  useEffect(() => {
    Aos.init({duration: 1000})
}, [])
    
    
  return (
    <div className="Hamburger">
    <input  type="checkbox" id="Hamburger" onChange={()=>props.toggleState(!props.togglerState)}/>
    <label for="Hamburger">
    <img  data-aos="fade-left" src={HamburgerImg}/>
    </label>
    </div>
  );
}

export default Hamburger;
