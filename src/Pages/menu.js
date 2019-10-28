import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/">TCC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link
                className={props.prova ?
                  'btn btn-primary ml-1 disabled' :
                  'btn btn-primary ml-1'}
                to={'/provas'} >
                Provas
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className={props.cad ?
                  'btn btn-primary ml-1 disabled' :
                  'btn btn-primary ml-1'}
                to={'/cadastro'} >
                Cadastrar Prova
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;