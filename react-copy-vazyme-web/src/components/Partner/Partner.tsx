import { Row, Col } from "react-bootstrap";
import styles from "./Partner.module.css";
import Image from 'react-bootstrap/Image';

import partner1 from "../../img/logo1.jpg";
import partner2 from "../../img/logo2.jpg";
import partner3 from "../../img/logo3.jpg";
import partner4 from "../../img/logo4.jpg";
import partner5 from "../../img/logo5.jpg";
import partner6 from "../../img/logo6.jpg";

function PartnerComponent() {
    return (
        <div className={styles["parnter-container"]}>
            <Row>
                <h1 id={styles["title"]}>OUR DISTRIBUTORS</h1>
            </Row>
            <Row>
                <h2 id={styles["text"]}>For Science For Health</h2>
            </Row>
            <Row>
                <Col xl="2" md="4" xs="6">
                    <p className={styles["partner-title"]}>Partner1</p>
                    <Image className={styles["parnter-logo"]} src={partner1} />
                </Col>
                <Col xl="2" md="4" xs="6">
                <p className={styles["partner-title"]}>Partner2</p>
                    <Image className={styles["parnter-logo"]} src={partner2} />
                </Col>
                <Col xl="2" md="4" xs="6">
                <p className={styles["partner-title"]}>Partner3</p>
                    <Image className={styles["parnter-logo"]} src={partner3} />
                </Col>
                <Col xl="2" md="4" xs="6">
                <p className={styles["partner-title"]}>Partner4</p>
                    <Image className={styles["parnter-logo"]} src={partner4} />
                </Col>
                <Col xl="2" md="4" xs="6">
                <p className={styles["partner-title"]}>Partner5</p>
                    <Image className={styles["parnter-logo"]} src={partner5} />
                </Col>
                <Col xl="2" md="4" xs="6">
                <p className={styles["partner-title"]}>Partner6</p>
                    <Image className={styles["parnter-logo"]} src={partner6} />
                </Col>
            </Row>
        </div>
    )
}

export default PartnerComponent;