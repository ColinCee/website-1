import React from 'react'
import './navbar.css'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
      <Container>
        <Menu id="navbar" pointing inverted secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name='projects'
            to='projects'
          />
        </Menu>
      </Container>
    )
  }
}

export default NavBar