import React from 'react'
import './navbar.css'
import { Container, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavBar extends React.Component {
  static get propTypes () {
    return {
      location: PropTypes.string,
      inverted: PropTypes.bool
    }
  }

  isActive (route) {
    return this.props.location.pathname === route
  }

  render () {
    return (
      <div className={this.props.inverted ? 'dark' : null}>
        <Container>
          <Menu
            id='navbar'
            pointing
            secondary
            inverted={this.props.inverted}
            size='huge'
          >
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
      </div>
    )
  }
}

export default withRouter(NavBar)
