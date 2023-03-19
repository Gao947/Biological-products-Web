import React, { useState } from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../Header/Header.module.css";
import Image from 'react-bootstrap/Image';

import vazymelogo from "../../img/logo1.webp";

function Header(){
const [ showAboutUsDropdown, setShowAboutUsDropdown ] = useState(false);
const [ showProductDropdown, setShowProductDropdown ] = useState(false);
const [ showResourceDropdown, setShowResourceDropdown ] = useState(false);
const [ showNewsDropdown, setShowNewsDropdown ] = useState(false);

    return (
      <div>
        <Navbar fixed="top" className={styles["header-navbar"]} expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image
               className={styles["header-logo"]}
               src={vazymelogo}
               />
            </Navbar.Brand> 
              <Nav>
                <Nav.Link href="#home" className={styles["header-navbar-button"]}>Home</Nav.Link>
                <NavDropdown 
                  title="About us" 
                  onMouseLeave={() => setShowAboutUsDropdown(false)}
                  onMouseOver={() => setShowAboutUsDropdown(true)}
                  className={styles["header-navbar-button"]}
                  show={showAboutUsDropdown}
                >
                  <Container className={styles["menu-item"]}>
                    <div className={styles["menu-item-text"]}>
                      <NavDropdown.Item href="#">Company Profile</NavDropdown.Item>
                      <NavDropdown.Item href="#">History</NavDropdown.Item>
                      <NavDropdown.Item href="#">Distributors</NavDropdown.Item>
                    </div>
                  </Container>
                </NavDropdown>

                <NavDropdown 
                  title="Product center" 
                  onMouseLeave={() => setShowProductDropdown(false)}
                  onMouseOver={() => setShowProductDropdown(true)}
                  className={styles["header-navbar-button"]}
                  show={showProductDropdown}
                >
                  <Container className={styles["menu-item"]}>
                    <div className={styles["menu-item-text"]}>
                    <NavDropdown.Item href="#">Reagents For Molecular Biology Research</NavDropdown.Item>
                    <NavDropdown.Item href="#">Reagents For NGS Library Preparation</NavDropdown.Item>
                    <NavDropdown.Item href="#">Reagents For Molecular Diagnosis</NavDropdown.Item>
                    <NavDropdown.Item href="#">Reagents For Bio-Medicine</NavDropdown.Item>
                    </div>
                  </Container>
                </NavDropdown>

                <NavDropdown 
                  title="Resource center" 
                  onMouseLeave={() => setShowResourceDropdown(false)}
                  onMouseOver={() => setShowResourceDropdown(true)}
                  className={styles["header-navbar-button"]}
                  show={showResourceDropdown}
                >
                  <Container className={styles["menu-item"]}>
                    <div className={styles["menu-item-text"]}>
                    <NavDropdown.Item href="#">Common Tools</NavDropdown.Item>
                    <NavDropdown.Item href="#">Technical Information</NavDropdown.Item>
                    <NavDropdown.Item href="#">Learning Center</NavDropdown.Item>
                    </div>
                  </Container>
                </NavDropdown>

                <NavDropdown 
                  title="News" 
                  onMouseLeave={() => setShowNewsDropdown(false)}
                  onMouseOver={() => setShowNewsDropdown(true)}
                  className={styles["header-navbar-button"]}
                  show={showNewsDropdown}
                >
                  <Container className={styles["menu-item"]}>
                    <div className={styles["menu-item-text"]}>
                    <NavDropdown.Item href="#action/5.1">Company News</NavDropdown.Item>
                    <NavDropdown.Item href="#action/5.2">Marketing Promotions</NavDropdown.Item>
                    </div>
                  </Container>
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