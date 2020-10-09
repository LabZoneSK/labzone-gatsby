import React from 'react'
import { Link } from 'gatsby'

/** Components */
import Icon from '../components/icon'

export default function Navbar () {
  return (
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <Icon
            source='/images/logo-black.png'
            alt='Logo LabZone s.r.o.'
            size='md'
          />
          <span>LabZone</span>
        </Link>

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
        </div>
      </div>
    </nav>
  )
}
