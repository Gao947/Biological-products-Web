import React, { useState } from "react";
import styles from "./Book.module.css";
import Image from 'react-bootstrap/Image';
import FlipPage from 'react-flip-page';

import page from "../../img/book.jpg";
import { Row, Col } from "react-bootstrap";

function BookComponent(props) {
    const pages = [
        {
            page: 1,
            content: <h1><Image className={styles["page"]} src={page} /></h1>,
            backgroundColor: 'lightblue'
        },
        {
            page: 2,
            content: <h1><Image className={styles["page"]} src={page} /></h1>,
            backgroundColor: 'lightgreen'
        },
        {
            page: 3,
            content: <h1><Image className={styles["page"]} src={page} /></h1>,
            backgroundColor: 'lightpink'
        }
    ];

    return (
        <div className={styles["contain"]}>
            <Row>
                <h2 id={styles["title"]}>Featured Articles</h2>
            </Row>
            <Row>
                <p id={styles["text"]}>For Science Foe Health</p>
            </Row>
            <Row className={styles["page-container"]}>
                <Col>
                    <FlipPage orientation="horizontal" uncutPages={true}>
                        {pages.map((page, index) => (
                            <article key={index} style={{ backgroundColor: page.backgroundColor }}>
                                {page.content}
                            </article>
                        ))}
                    </FlipPage>
                </Col>
                <Col>
                    <FlipPage orientation="horizontal" uncutPages={true}>
                        {pages.map((page, index) => (
                            <article key={index} style={{ backgroundColor: page.backgroundColor }}>
                                {page.content}
                            </article>
                        ))}
                    </FlipPage>
                </Col>
                <Col>
                    <FlipPage orientation="horizontal" uncutPages={true}>
                        {pages.map((page, index) => (
                            <article key={index} style={{ backgroundColor: page.backgroundColor }}>
                                {page.content}
                            </article>
                        ))}
                    </FlipPage>
                </Col>
                <Col>
                    <FlipPage orientation="horizontal" uncutPages={true}>
                        {pages.map((page, index) => (
                            <article key={index} style={{ backgroundColor: page.backgroundColor }}>
                                {page.content}
                            </article>
                        ))}
                    </FlipPage>
                </Col>
                <Col>
                    <FlipPage orientation="horizontal" uncutPages={true}>
                        {pages.map((page, index) => (
                            <article key={index} style={{ backgroundColor: page.backgroundColor }}>
                                {page.content}
                            </article>
                        ))}
                    </FlipPage>
                </Col>
            </Row>
        </div>
    );
};




export default BookComponent;
