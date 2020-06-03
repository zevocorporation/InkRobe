import React from 'react';


class NavLink extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isDropdown: false
    }
    this.toggler = this.toggler.bind(this)
    

  }
  toggler() {
    this.setState({ isDropdown: !this.state.isDropdown })
  }
  
  render()
   {

    const renderDropdowns = (
      <React.Fragment>
        <li>
          <a href='https://www.linkedin.com/company/inkrobe'>LinkedIn</a>
        </li>
        <li>
        <a href='https://www.facebook.com/inkrobe/' >Facebook</a>
      </li>
      <li>
      <a href='https://indiamart.com/inkrobe'>Indiamart</a>
    </li>
      </React.Fragment>

    )

    return (
      <React.Fragment>
        {this.props.data.dropdowns
          ?
          <li>
            <a onClick={this.toggler}>{this.props.data.name}
              {this.state.isDropdown &&
                <ul className="NavDropdown">
                  {renderDropdowns}
                </ul>
              }
            </a>
          </li>
          :
          <li>
            <a href={this.props.data.href}>{this.props.data.name}</a>
          </li>}

      </React.Fragment>

    );
  }
}

export default NavLink;
