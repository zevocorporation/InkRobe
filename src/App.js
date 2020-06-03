import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Loader from './img/loader.gif'



import Policy from './Pages/Policy'
import Terms from './Pages/Terms'
import Homepage from './Pages/Homepage'


import Navbar from './Layouts/Navbar'
import Data from './Data/SiteSettings'
import SiteSettings from './Data/SiteSettings'



import BG_music from './img/Bg_music.mp3'
import './CSS/App.css'


class App extends React.Component {

  state = {
    loading: false
  }
  componentDidMount = () => {
    setTimeout(function () { //Start the timer
      this.setState({ loading: true }) //After 1 second, set render to true
    }.bind(this), 2000)
  }


  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
        <Navbar data={{ navLinks: SiteSettings.navLinks, logo: Data.logo, name: Data.button.name }} />
        <audio loop autoPlay>
          <source src={BG_music} type="audio/mp3" />
        </audio>
        <BrowserRouter>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/policy" component={Policy}/>
          <Route exact path="/terms" component={Terms}/>
        </BrowserRouter>
        </React.Fragment>
        

      )
    }
    return (
      <div className="loader-bg">
        <img className="loader" src={Loader} />
      </div>
    )
  }
}

export default App;
