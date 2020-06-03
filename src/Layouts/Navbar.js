import React,{Component} from 'react';


import NavLink from '../Components/NavLink'
import Hamburger from '../Components/Hamburger'
import Logo from '../Components/Logo'
import Button from '../Components/Button'


import '../CSS/Navbar.css'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isNavlinks: false,
    }
    this.handleToggler = this.handleToggler.bind(this)
   
  }


  handleToggler(navLinksState) {
    this.setState({ isNavlinks: navLinksState })
  }



  render() {



    const renderNavLinks = this.props.data.navLinks.map(navLink =>
      <React.Fragment>
        <ul>
          <NavLink key={navLink.id} data={navLink} />
        </ul>
      </React.Fragment>
    )

    return (
      <div className="Navbar">
        <div className="Logo">
        <Logo data={this.props.data.logo}/>
        </div>
        <div data-aos="fade-up" className="NavLinks">
        {this.state.isNavlinks && renderNavLinks}
        </div>
        {(window.innerWidth <= 890) 
          ? 
          <React.Fragment>        
          <div className="NavButtons">
          <Button name={this.props.data.name}/>
          </div>
          <div className="Hamburger">
          <Hamburger toggleState={this.handleToggler} togglerState={this.state.isNavlinks}/>
          </div>
          </React.Fragment> 
          :
          <React.Fragment>
          <div className="NavLinks">
           {renderNavLinks}
          </div>
          <div className="NavButtons">
          <Button name={this.props.data.name}/>
          </div>
          </React.Fragment>
        }
       
      </div>
    );
  }
}

export default Navbar;
