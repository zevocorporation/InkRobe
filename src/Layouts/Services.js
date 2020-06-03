import React from 'react';
import Card from '../Components/Card';


import '../CSS/Services.css'

class Services extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
     <React.Fragment >
     <div  id="services" className="title">
     <h3>{this.props.data.title1}</h3>
     <h2>{this.props.data.title2}</h2>
     </div>
   <div className="Wrapper">
     <div className='Scroller' id="ServiceWrapper">
     <Card data={this.props.data}/>
     </div>
   </div>
     </React.Fragment>  
    )
  }
}

export default Services;
