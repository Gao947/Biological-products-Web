import styles from "./Footer.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Mailbox, Telephone, Cursor } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import colourlogo from "../../img/footer_logo.png";
import smallicon1 from "../../img/sns1.png";
import smallicon2 from "../../img/sns2.webp";
import smallicon3 from "../../img/sns3.webp";
import smallicon4 from "../../img/sns4.webp";

function FooterComponent() {
    return (
        <div className={styles["web-footer"]}>
            <Container>
                <Row>
                    <Col xl="4">
                        <Row>
                            <a href="">
                                <Image id={styles["footer-logo"]} src={colourlogo} />
                            </a>
                        </Row>
                        <Row>
                            <p id={styles["footer-logo-text"]}>
                            The products on this website may not be sold in all countries or
                            regions. Please contact Vazyme or your local distributor for
                            further information.
                            </p>
                        </Row>
                    </Col>
                    <Col xl="3">
                        <Row>
                            <span className={styles["footer-subtitle"]}>Product center</span>
                        </Row>
                        <Row>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Reagents For Molecular Biology </p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Reagents For NGS Library Preparation</p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Reagents For Bio-Medicine</p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Reagents For Molecular Diagnosis</p>
                        </a>
                        </Row>
                    </Col>
                    <Col xl="3">
                        <Row>
                            <span className={styles["footer-subtitle"]}>Resource center</span>
                        </Row>
                        <Row>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Authenticity Query</p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Experimental Tools</p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Product Manual</p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Featured Articles</p>
                        </a>
                        </Row>
                    </Col>
                    <Col xl="2">
                        <Row>
                            <span className={styles["footer-subtitle"]}>About us</span>
                        </Row>
                        <Row>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Company Profile</p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>History</p>
                        </a>
                        <a href="#" className={styles["footer-subtitle-text"]}>
                            <p>Our Distributors</p>
                        </a>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xl="9">
                        <div>
                        <p>
                            <Mailbox color="Black" size={30}/>
                            <span className={styles["footer-icon-item"]}>info.biotech@vazyme.com</span>
                        </p>
                        </div>
                        <div>
                        <p>
                            <Telephone color="Black" size={30} />
                            <span className={styles["footer-icon-item"]}>+86 25-83772625</span>
                        </p>
                        </div>
                        <div>
                        <p>
                        <Cursor color="Black" size={30}/>
                        <span className={styles["footer-icon-item"]}>Red Maple Hi-tech Industry Park, Nanjing, PRC</span>
                        </p>
                        </div>
                    </Col>
                    <Col xl="3">
                        <Row>
                            <Form.Control
                                placeholder="Your@email.com"
                                aria-label="Your@email.com"
                                aria-describedby="basic-addon2"
                                id={styles["footer-form"]}
                            />
                        </Row>
                        <Row>
                        <Button id={styles["footer-button"]}>Sign up</Button>
                        </Row>
                        <Row>
                            <Col className={styles["footer-small-icon"]}><Image src={smallicon1} /></Col>
                            <Col className={styles["footer-small-icon"]}><Image src={smallicon2} /></Col>
                            <Col className={styles["footer-small-icon"]}><Image src={smallicon3} /></Col>
                            <Col className={styles["footer-small-icon"]}><Image src={smallicon4} /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent