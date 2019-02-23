import React from 'react'
import './content.css'

const Content = () => {
  return (
    <div id="masthead-content" className="ui container">
      <h1 className="ui inverted header">
        <span className="name">
          Colin Cheung
        </span>
        <div className="ui hidden divider"/>
        <a href="https://www.linkedin.com/in/colin-cheung/">
          <button className="ui linkedin button">
            <i className="linkedin icon"/>
            LinkedIn
          </button>
        </a>
      </h1>
    </div>
  )
}

export default Content