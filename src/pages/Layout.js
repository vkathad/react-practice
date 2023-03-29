import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarUi from '../componets/UI/NavBarUi';


function Layout(props) {
    

  return (
    
    <>
      <NavBarUi/> 
      <Container style={{paddingTop:'4%'}}   >

        {props.children}
      </Container>
    </>
    
  );
}

export default Layout;
