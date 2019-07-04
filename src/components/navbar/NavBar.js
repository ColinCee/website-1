import React from 'react'
import './navbar.css'
import { Container, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  isActive (route) {
    return this.props.location.pathname === route
  }

  render () {
    return (
      <Container>
        <Menu id="navbar" pointing secondary inverted={this.props.inverted} size='huge'>
          <Menu.Item
            as={Link}
            name='home'
            to='/'
            active={this.isActive('/')}
          />
          <Menu.Item
            as={Link}
            name='projects'
            to='projects'
            active={this.isActive('/projects')}
          />
        </Menu>
      </Container>
    )
  }
}

export default withRouter(NavBar)