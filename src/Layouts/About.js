import React from 'react';
import AboutCard from '../Components/AboutCard';


import '../CSS/About.css'

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
   <div id="AboutWrapper" className="Wrapper">
     <AboutCard data={this.props.data}/>
   </div>
     </React.Fragment>  
    )
  }
}

export default About;
