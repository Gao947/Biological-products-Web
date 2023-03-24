import styles from "./Footer.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Mailbox, Telephone, Cursor } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';

import colourlogo from "../../img/footer_logo.png";

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
                        info.biotech@vazyme.com
                        </p>
                        </div>
                        <div>
                        <p>
                        <Telephone color="Black" size={30}/>
                        +86 25-83772625
                        </p>
                        </div>
                        <div>
                        <p>
                        <Cursor color="Black" size={30}/>
                        Red Maple Hi-tech Industry Park, Nanjing, PRC
                        </p>
                        </div>
                    </Col>
                    <Col xl="3">2.2</Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent