import React from "react"
import { Link } from "gatsby"

/** Emotion */
import styled from "@emotion/styled"

import Icon from "../components/icon"

const HeaderWrapper = styled.div`
  margin-bottom: 1.5rem;
`
const MenuList = styled.ul`
  list-style: none;
  float: right;
`

const MenuItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const HolyGrailMain = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr min(85ch, 100%) 1fr;

  & > * {
    grid-column: 2;
  }
`

const ListLink = props => (
  <MenuItem>
    <Link to={props.to}>{props.children}</Link>
  </MenuItem>
)

export default function Layout({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <Icon
            source="/images/logo-black.png"
            alt="Logo LabZone s.r.o."
            size="md"
          />
          <h3 style={{ display: `inline` }}>LabZone</h3>
        </Link>

        <MenuList>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </MenuList>
      </HeaderWrapper>

      <HolyGrailMain>{children}</HolyGrailMain>
    </>
  )
}
