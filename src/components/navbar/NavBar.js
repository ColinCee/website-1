import React from 'react'
import './navbar.css'
import { Container, Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeItem: 'home' }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state
    return (
      <div>
        <Container>
          <Menu id="navbar" pointing inverted secondary>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='test'
              active={activeItem === 'test'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Container>
      </div>
    )
  }
}

export default NavBar