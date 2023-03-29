import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './MainNavigation.module.css';
import {  Form, NavLink, useRouteLoaderData } from 'react-router-dom';




function NavBarUi() {
  const token = useRouteLoaderData('root');

  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <br />
      <Navbar  fixed="top"  bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink    to="/"  className={({ isActive }) =>
                isActive ? 'nav-link '+classes.active : 'nav-link'
              }
              end >Home</NavLink>
         
            {!token && (
            <NavLink  to="/register"  className={({ isActive }) =>
                isActive ? 'nav-link '+classes.active : 'nav-link'
              }
              end >Register</NavLink>
            )}

             {!token && (
            <NavLink  to="/login"  className={({ isActive }) =>
                isActive ? 'nav-link '+classes.active : 'nav-link'
              }
              end >Login</NavLink>
              )}
              {token && (
              <NavLink  to="/events"  className={({ isActive }) =>
                isActive ? 'nav-link '+classes.active : 'nav-link'
              }
              end >Events</NavLink>
              )}

               {token && (
              <NavLink  to="/addevent"  className={({ isActive }) =>
                isActive ? 'nav-link '+classes.active : 'nav-link'
              }
              end >Add Event</NavLink>
              )}
              {token && (
                <span>
                  <Form action="/logout" method="post">
                    <button className={classes.logoutButton}>Logout</button>
                  </Form>
                </span>
             
          )}
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavBarUi;