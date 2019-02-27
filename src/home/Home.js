import React from 'react'
import Masthead from './masthead/Masthead'
import NavBar from './navbar/NavBar'
import Content from './content/Content'

const Home = () => {
  return (
    <div id="home">
      <NavBar/>
      <Masthead/>
      <Content/>
    </div>
  )
}

export default Home