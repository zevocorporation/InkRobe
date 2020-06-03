import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'


function Gallery(props) {
  useEffect(() => {
    Aos.init({duration: 2000})
}, [])
  return (
    props.data.map(gallery=><img data-aos="zoom-in" src={gallery} />
    )   
  )

}

export default Gallery;
