import React from 'react';
import Image from '../Components/Image';

import '../CSS/Journey.css'

import Expander from '../img/Expander.svg'

class Journey extends React.Component {
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
        <div id="Journey" className="title">
          <h3 id="journey">{this.props.data.title1}</h3>
          <h2>{this.props.data.title2}</h2>
        </div>
        <div id="ClientWrapper" className="Wrapper">        
          <div style={this.state.isWrapper ? { height: 'fit-content' } : { height: '600px' }} id="LogoWrapper" >
          {(window.innerWidth <= 720) 
            ? <Image data={this.props.data.mapMobile}/>
            : <Image data={this.props.data.mapDesktop}/>
          }
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

export default Journey;
