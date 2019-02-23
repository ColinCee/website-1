import React from 'react'
import MenuLink from './MenuLink'
import './menu.css'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeElement: 'Home' }
  }

  onMenuButtonClick = (type) => {
    this.setState({ activeElement: type })
  }

  render () {
    return (
      <div className="following bar">
        <div className="ui container">
          <div className="ui large inverted secondary pointing menu">
            <MenuLink clickCallback={this.onMenuButtonClick} activeElement={this.state.activeElement} text="Home"/>
            <MenuLink clickCallback={this.onMenuButtonClick} activeElement={this.state.activeElement} text="Test"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu