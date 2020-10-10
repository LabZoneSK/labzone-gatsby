import React from 'react'
import { Link } from 'gatsby'

/** Emotion & Styling */
import styled from '@emotion/styled'

/** Components */
import Icon from '../components/icon'

const CustomizedNav = styled.nav`
  box-shadow: 0 2px 0 0 #f5f5f5;
`

export default function Navbar () {
  return (
    <CustomizedNav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
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
          <Link to='/portfolio' className='navbar-item'>
            Portfolio
          </Link>
        </div>
      </div>
    </CustomizedNav>
  )
}
