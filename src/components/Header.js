import React, { Component } from 'react'
import Logo from '../assets/face.png'
import { FaSearch } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import Avatar from '../assets/avatar.jpg'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="s1">
          <img src={Logo} width={32} height={32} />
          <div className="search-intern">
            <FaSearch className="search-icon"/>
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="s2">
          <div className="icon1">
            <AiFillHome className="icon-home"/>
          </div>
        </div>
        <div className="s3">
          <div className="avatar"></div>
          <span>Ian Brown</span>
        </div>
      </div>
    )
  }
}

export default Header