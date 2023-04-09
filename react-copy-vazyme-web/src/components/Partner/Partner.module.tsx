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

            </Row>
        </div>
    )
}

export default PartnerComponent;