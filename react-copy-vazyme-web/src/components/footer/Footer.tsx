import styles from "./Footer.module.css";
import { Row, Col, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

import colourlogo from "../../img/footer_logo.png";

function FooterComponent() {
    return (
        <div>
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
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Reagents For Molecular Biology </p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Reagents For NGS Library Preparation</p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Reagents For Bio-Medicine</p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Reagents For Molecular Diagnosis</p>
                        </a>
                        </Row>
                    </Col>
                    <Col xl="3">
                        <Row>
                            <span className={styles["footer-subtitle"]}>Resource center</span>
                        </Row>
                        <Row>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Authenticity Query</p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Experimental Tools</p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Product Manual</p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Featured Articles</p>
                        </a>
                        </Row>
                    </Col>
                    <Col xl="2">
                        <Row>
                            <span className={styles["footer-subtitle"]}>About us</span>
                        </Row>
                        <Row>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Company Profile</p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>History</p>
                        </a>
                        <a href="">
                            <p className={styles["footer-subtitle-text"]}>Our Distributors</p>
                        </a>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>2.1</Col>
                    <Col>2.2</Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent