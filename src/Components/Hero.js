import React from 'react';

import HeroImg from '../img/Hero.svg'
import HeroMobileImg from '../img/HeroMobile.svg'


import '../CSS/Hero.css'


class Hero extends React.Component {
  
  render() {
    return (
      <div className="Hero">
      {(window.innerWidth <= 720) 
        ? 
        <img onClick={()=>window.location.href='https://forms.gle/hnHHCs7hiSgceqHA7'} src={HeroMobileImg}/>
        :
        <img onClick={()=>window.location.href='https://forms.gle/hnHHCs7hiSgceqHA7'} src={HeroImg} />
      }
       
      </div>
    )
  }
}

export default Hero;
