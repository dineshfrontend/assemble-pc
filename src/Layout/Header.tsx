import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

let menu = [{ title:"Build My PC",url:"/build-my-pc" },{title:"My Cart", url:"/my-cart" }];

export default function Header() {
    console.log();
    return (<Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">Assemble PC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {menu.map((data,index)=>{
                return <Nav.Link key={index} href={data.url}>
                            <span className={(window.location.pathname === data.url)?"hgl-menu":""}>
                                {data.title}
                            </span>
                        </Nav.Link>
            })}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}