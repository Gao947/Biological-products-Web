import { Col, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../Header/Header.module.css";
import Image from 'react-bootstrap/Image';

import vazymelogo from "../../img/logo1.webp";

function Header(){
    return (
      <div>
        <Navbar fixed="top" className={styles["header-navbar"]}>
          <Container>
            <Navbar.Brand href="#home">
              <Image
               className={styles["header-logo"]}
               src={vazymelogo}
               />
            </Navbar.Brand> 
              <Nav>
                <Nav.Link href="#home" className={styles["header-navbar-button"]}>Home</Nav.Link>
                <NavDropdown title="About us" className={styles["header-navbar-button"]}>
                  <NavDropdown.Item href="#action/2.1">Company Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.2">History</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.3">Distributors</NavDropdown.Item>
                </NavDropdown>
                  
                <NavDropdown title="Product center" className={styles["header-navbar-button"]}>
                  <NavDropdown.Item href="#action/3.1">Reagents For Molecular Biology Research</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Reagents For NGS Library Preparation</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Reagents For Molecular Diagnosis</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Reagents For Bio-Medicine</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Resource center" className={styles["header-navbar-button"]}>
                  <NavDropdown.Item href="#action/4.1">Common Tools</NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.2">Technical Information</NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.3">Learning Center</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="News" className={styles["header-navbar-button"]}>
                  <NavDropdown.Item href="#action/5.1">Company News</NavDropdown.Item>
                  <NavDropdown.Item href="#action/5.2">Marketing Promotions</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#support" className={styles["header-navbar-button"]}>Support</Nav.Link>
                <Nav.Link href="#contact" className={styles["header-navbar-button"]}>Contact us</Nav.Link>

              </Nav>
          </Container>
        </Navbar>

        </div>
    )
}

export default Header;