import React from "react"
import { Link } from 'gatsby'

import Header from '../components/header'

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to='/contact'>Contact us</Link>
      <Header headerText='Home page'/>
      <p>What a beautiful world.</p>

      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}