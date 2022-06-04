import React, { Component } from 'react'
import {Nav,NavItem,NavbarBrand,NavLink,Navbar} from 'reactstrap';

export default class AppNav extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Crud Application</NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Details">Details</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Standards">Standards</NavLink>
            </NavItem>
            </Nav>
          
        
      </Navbar>
            </div>
        )
    }
}

