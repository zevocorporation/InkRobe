import React from 'react';
import Gallery from '../Components/Gallery';

import '../CSS/Showcase.css'

import Expander from '../img/Expander.svg'

class Showcase extends React.Component {
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
        <div id="Showcase" className="title">
          <h3 id="showcase" >{this.props.data.title1}</h3>
          <h2>{this.props.data.title2}</h2>
        </div>
        <div id="ShowcaseWrapper" className="Wrapper">
          <div id="GalleryScroller" className='Scroller'>
            <Gallery data={this.props.data.gallery} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Showcase;
