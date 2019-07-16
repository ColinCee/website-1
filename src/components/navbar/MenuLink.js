import React from 'react'

class MenuLink extends React.Component {
  onClick = () => {
    this.props.clickCallback(this.props.text)
  }

  getClass () {
    return this.props.activeElement === this.props.text ? 'item active' : 'item'
  }

  render () {
    return (
      <a
        className={this.getClass()}
        onClick={this.onClick}
        href={this.props.link}
      >
        {this.props.text}
      </a>
    )
  }
}

export default MenuLink
