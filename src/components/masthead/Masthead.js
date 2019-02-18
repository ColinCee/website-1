import React from 'react'
import Menu from '../menu/Menu'
import './masthead.css'

const Masthead = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui container">
        <Menu/>
      </div>
    </div>
  )
}

export default Masthead