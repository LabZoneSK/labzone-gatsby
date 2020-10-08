import React from 'react'
import { Link } from 'gatsby'

/** Emotion */
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const HeaderWrapper = styled.div`
  marginbottom: 1.5rem;
`

const MenuList = styled.ul`
  list-style: none;
  float: right;
`

const MenuItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const ListLink = props => (
  <MenuItem>
    <Link to={props.to}>{props.children}</Link>
  </MenuItem>
)

export default function Layout ({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Link to='/' style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <MenuList>
          <ListLink to='/'>Home</ListLink>
          <ListLink to='/about/'>About</ListLink>
          <ListLink to='/contact/'>Contact</ListLink>
        </MenuList>
      </HeaderWrapper>

      <main className='wrapper'>
        {children}
      </main>

    </>
  )
}
