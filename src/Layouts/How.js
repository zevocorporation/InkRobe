import React from 'react';
import AboutCard from '../Components/AboutCard';


import '../CSS/How.css'

class About extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
     <React.Fragment >
     <div id="clients" className="title">
     <h3>{this.props.data.title1}</h3>
     <h2>{this.props.data.title2}</h2>
     </div>
   <div id="HowWrapper" className="Wrapper">
     <AboutCard data={this.props.data}/>
   </div>
   <h2 className="tag">That's why InkRobe is complete clothing solution company</h2>
     </React.Fragment>  
    )
  }
}

export default About;
