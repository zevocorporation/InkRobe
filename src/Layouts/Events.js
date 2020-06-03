import React from 'react';
import EventCard from '../Components/Events';


import '../CSS/Event.css'

class Events extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
     <React.Fragment >
     <div id="clients" className="title">
     <h3 id="events">{this.props.data.title1}</h3>
     <h2>{this.props.data.title2}</h2>
     </div>
   <div className="Wrapper">
     <div id="EventScroller" className='Scroller'>
     <EventCard data={this.props.data}/>
     </div>
   </div>
     </React.Fragment>  
    )
  }
}

export default Events;
