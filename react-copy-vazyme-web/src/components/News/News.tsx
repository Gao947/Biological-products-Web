import styles from "./News.module.css";
import Image from 'react-bootstrap/Image';
import { Chrono } from "react-chrono";
import { Col, Row } from "react-bootstrap";

import protein from "../../img/Amyloid-lead.jpg";


function NewsComponent() {
    return (
        <div className={styles["background-image"]}>
           <Row>
            <Col>
            <Chrono
      items={[
        {
          title: "Nov 2021",
          cardTitle: "Celebrate 10th Anniversary Online:",
          url: "http://google.com",
          cardSubtitle:
            "Together for Better Life",
          cardDetailedText: ``,
        },
        {
            title: "Sep 2022",
            cardTitle: "Release 2022 Semi-Annual Report:",
            url: "http://google.com",
            cardSubtitle:
              "On Track to Be a Biotech Leader",
            cardDetailedText: ``,
          },
          {
            title: "Aug 2022",
            cardTitle: "Explore more virus-free plants:",
            url: "http://google.com",
            cardSubtitle:
              "With the help of WUS protein",
            cardDetailedText: ``,
          },
      ]}
      mode="VERTICAL"
    />
            </Col>
            <Col>
            <Image className={styles["protein-image"]} src={protein} />
            </Col>
           </Row>
        </div>
    )
};

export default NewsComponent;