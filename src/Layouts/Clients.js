import React from 'react';
import Review from '../Components/Review';
import Logo from '../Components/Logo';

import '../CSS/Clients.css'

import Expander from '../img/Expander.svg'

class Clients extends React.Component {
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
        <div id="Clients" className="title">
          <h3 id="clients">{this.props.data.title1}</h3>
          <h2>{this.props.data.title2}</h2>
        </div>
        <div id="ClientWrapper" className="Wrapper">
          <div className='Scroller' id="ClientScroller">
            <Review data={this.props.data.clients} />
          </div>
          
          <div style={this.state.isWrapper ? { height: 'fit-content' } : { height: '300px' }} id="inWrapper" >
          <Logo data={this.props.data.logos} />
          </div>
          {this.state.isWrapper ?
            <div onClick={this.toggler} className="Expander">
              <img style={{ transform: 'rotate(180deg)' }} src={Expander} />
              <h4 >collapse</h4>
            </div>
            :
            <div onClick={this.toggler} className="Expander">
              <h4 >more</h4>
              <img src={Expander} />
            </div>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Clients;
