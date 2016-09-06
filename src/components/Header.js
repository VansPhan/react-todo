import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <header>
      	<ul>
      		<li><Link to={'/'}>Home</Link></li>
      		<li><Link to={'/todos'}>React Todos</Link></li>
      		<li><Link to={'/test'}>Van</Link></li>
      	</ul>
      </header>
    )
  }
}

export default Header