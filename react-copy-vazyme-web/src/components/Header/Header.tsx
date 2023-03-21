import React, { useState } from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../Header/Header.module.css";
import Image from 'react-bootstrap/Image';
import { Search, Person, Cash, BagPlus, Pause } from 'react-bootstrap-icons';
import vazymelogo from "../../img/logo1.webp";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, InputGroup } from "react-bootstrap";

function Header() {
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showResourceDropdown, setShowResourceDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <NavDropdown
              title="Home"
              className={styles["header-navbar-button"]}
              disabled
            >
            </NavDropdown>

            <NavDropdown
              title="ABOUT US"
              onMouseLeave={() => setShowAboutUsDropdown(false)}
              onMouseOver={() => setShowAboutUsDropdown(true)}
              className={styles["header-navbar-button"]}
              show={showAboutUsDropdown}
            >
              <Container className={styles["menu-item"]}>
                <div className={styles["menu-item-text"]}>
                  <NavDropdown.Item href="#">COMPANY PROFILE</NavDropdown.Item>
                  <NavDropdown.Item href="#">HISTORY</NavDropdown.Item>
                  <NavDropdown.Item href="#">DISTRIBUTORS</NavDropdown.Item>
                </div>
              </Container>
            </NavDropdown>

            <NavDropdown
              title="PRODUCT CENTER"
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
              title="RESOURCE CENTER"
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
              title="NEWS"
              onMouseLeave={() => setShowNewsDropdown(false)}
              onMouseOver={() => setShowNewsDropdown(true)}
              className={styles["header-navbar-button"]}
              show={showNewsDropdown}
            >
              <Container className={styles["menu-item"]}>
                <div className={styles["menu-item-text"]}>
                  <NavDropdown.Item href="#">Company News</NavDropdown.Item>
                  <NavDropdown.Item href="#">Marketing Promotions</NavDropdown.Item>
                </div>
              </Container>
            </NavDropdown>

            <NavDropdown
              title="SUPPORT"
              className={styles["header-navbar-button"]}
              disabled
            >
            </NavDropdown>

            <NavDropdown
              title="CONTSCT US"
              className={styles["header-navbar-button"]}
              disabled
            >
            </NavDropdown>
          </Nav>
          <Col>

            <Button variant="primary" onClick={handleShow} id={styles["header-icon-button"]}>
              <Search color="white" size={30} />
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body><InputGroup id={styles['search-bar']}>
                <Form.Control
                  placeholder="Search promotional products"
                  aria-label="Search promotional products"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id={styles['searchbar-button']}>
                  Search
                </Button>
              </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

          <Col>
            <Person color="white" size={30} />
          </Col>
          <Col>
            <Pause color="white" size={30} />
          </Col>
          <Col>
            <Cash color="white" size={30} />
          </Col>
          <Col>
            <Pause color="white" size={30} />
          </Col>
          <Col>
            <BagPlus color="white" size={30} />
          </Col>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header;