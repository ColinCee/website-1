import React from 'react'

const MenuLink = ({ link, text }) => {
  return (
    <a className="item" href={link}>{text}</a>
  )
}

export default MenuLink