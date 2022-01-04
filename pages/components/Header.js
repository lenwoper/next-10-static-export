import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Link from 'next/link'
import {useRouter} from 'next/router'



function Header() {

  // registered or not 
  const [name, setstate] = useState(false)



  const router= useRouter()


 useEffect(() => {





    var isRegistered = JSON.parse(localStorage.getItem('registered'));


    console.info('that is your  name ',isRegistered)

    if (isRegistered != null ) {
      setstate(isRegistered.firstName)


    }
    else {
      setstate(false)
    }

  })


 

console.log('name', name)



  return (
    <>
      <Navbar bg="dark" style={{ color: 'white' , marginBottom:"0px" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home">Touroxy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  ><Link className={router.pathname == "/page/service" ? "selected__active" :""} href="/"><a>Home</a></Link></Nav.Link>
              <Nav.Link   ><Link className={router.pathname == "/page/service" ? "selected__active" :""} href="/page/service"><a>Services</a></Link></Nav.Link>
              <Nav.Link ><Link className={router.pathname == "/page/products" ? "selected__active" :""} href="/page/products"><a>Products</a></Link></Nav.Link>
              <Nav.Link  ><Link className={router.pathname == "/page/pricing"?"selected__active" :""} href="/page/pricing"><a>Pricing</a></Link></Nav.Link>
              <Nav.Link  ><Link className={router.pathname == "/page/about" ? "selected__active" :""} href="/page/about"><a>About</a></Link></Nav.Link>



              <NavDropdown bg="dark" title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link href="/page/about"><a>About</a></Link></NavDropdown.Item>
                <NavDropdown.Item ><Link href="/page/about"><a>About</a></Link></NavDropdown.Item>
            
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>



            <span className="icon_name"><Link href={ name ? '/components/Dashboard' : '/components/registerPage'} >{  name ? name : 'Register'}</Link>   </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header




