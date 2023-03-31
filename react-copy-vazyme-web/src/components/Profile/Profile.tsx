import { Row, Col, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import styles from "./Profile.module.css";

import leftbg1 from "../../img/about_left_img.png";
import leftbg2 from "../../img/Leftbg2.jpg";
import rightbg1 from "../../img/rightbg1.png";
import rightbg2 from "../../img/rightbg2.png";
import rightbg3 from "../../img/rightbg3.jpg";
import rightbg4 from "../../img/rightbg4.jpg";


function ProfileComponent() {
    return (
        <div>
            <Row>
                <Col>
                    <Row>
                        <Image className={styles["leftbg1"]} src={leftbg1} />
                        <h1 className={styles["profile-title"]}>About Company</h1>
                        <p className={styles["profile-text-1"]}>
                            Company Name is a description of your company.<br />
                            Our primary product or service is description of<br />
                            your product/service. Our team is made up of<br />
                            number of employees dedicated professionals<br />
                            who are committed to company's mission statement.
                        </p>
                        <div className={styles["profile-text-2"]}>》 Company profile</div>
                        <p className={styles["profile-text-3"]}>》 History</p>
                        <Button variant="outline-primary" id={styles["profile-left-button"]}>Learn More ——\</Button>
                    </Row>
                    <Row>
                        <Image className={styles["leftbg1"]} src={leftbg2} />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Image className={styles["rightbg"]} src={rightbg1} />
                    </Row>
                    <Row>
                        <Image className={styles["rightbg"]} src={rightbg2} />
                    </Row>
                    <Row>
                        <Image className={styles["rightbg"]} src={rightbg3} />
                    </Row>
                    <Row>
                        <Image className={styles["rightbg"]} src={rightbg4} />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default ProfileComponent;