import React from 'react';
import TeamCard from '../Components/Team';
import Stats from '../Components/Stats';

import '../CSS/Team.css'

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isWrapper: false
    }
    this.toggler = this.toggler.bind(this)

  }

  toggler() {
    this.setState({ isWrapper: !this.state.isWrapper })
  }

  render() {
    return (
      <React.Fragment >
        <div id="TeamTitle" className="title">
          <h3 id="team">{this.props.data.title1}</h3>
          <h2>{this.props.data.title2}</h2>
        </div>
        <div id="TeamWrapper" className="Wrapper">
        <div id="TeamScroller" className='Scroller'>
        <TeamCard data={this.props.data.members} />
        </div>
        <div id="StatsWrapper" className="Wrapper">
        <Stats data={this.props.data.stats}/>
        </div>
        </div>    
      </React.Fragment>
    )
  }
}

export default Team;
