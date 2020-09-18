import React from "react"
import { Link } from "gatsby"
import Banner from "../components/Banner"
// You can import CSS too!
import './site.css'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
    <Banner />
    <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, textDecoration:`none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline`, }}>iSamples</h1>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/news/">News</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <footer>
      <small>&copy; Copyright 2020, iSamples Test Site</small>
      </footer>
    </div>
    </div>
  )
}