import React, { Component } from 'react';

import { Button, FormControl, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';



class DesignerNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Brighton Board</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
          <Nav.Link href="#what_is_on">What's On</Nav.Link>
          <NavDropdown title="Property" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">For Sale</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">For Rent</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="#for_sale">For Sale</Nav.Link>
          <Nav.Link href="#brighton_guide">Brighton Guide</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar >

    );
  }
}

export default DesignerNavbar;