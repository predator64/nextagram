import React from "react"
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from "reactstrap"
import { Link, useHistory } from "react-router-dom"

const TopBar = () => {
  const history = useHistory()

  return (
    <Navbar>
      <NavbarBrand onClick={() => {history.push("/")}}>Nextagram</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink onClick={() => {history.push("/users/1")}}>My Profile</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default TopBar