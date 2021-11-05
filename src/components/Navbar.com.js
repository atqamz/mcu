import React from "react";
import * as C from "react-bootstrap";

export default function Navbar(props) {
  return (
    <div className='head sticky-top'>
      <C.Navbar className='mx-5' collapseOnSelect expand='md' variant='dark'>
        <C.Navbar.Brand>
          <C.Image
            src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
            alt='Marvel'
            width='100'
          />
        </C.Navbar.Brand>
        <C.Navbar.Toggle aria-controls='responsive-nav' />
        <C.Navbar.Collapse id='responsive-nav'>
          <C.Nav className='me-auto'>
            <C.Nav.Link href='#movies'>Movies</C.Nav.Link>
            <C.Nav.Link href='#wishlist'>Wishlist</C.Nav.Link>
          </C.Nav>

          <div class='d-flex'>
            <input
              class='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={props.onChange}
            />
          </div>
        </C.Navbar.Collapse>
      </C.Navbar>
    </div>
  );
}
