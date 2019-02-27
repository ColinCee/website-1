import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Container>
      <Menu id="project-navbar" pointing secondary>
        <Menu.Item
          as={Link}
          name='home'
          to='/'
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

export default NavBar