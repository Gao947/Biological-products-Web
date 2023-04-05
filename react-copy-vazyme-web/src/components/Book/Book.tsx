import styles from "./Book.module.css";
import Image from 'react-bootstrap/Image';

import page from "../../img/book.jpg";

function BookComponent() {
    return (
        <div>
            <Image className={styles["page"]} src={page} />
        </div>
    )
}

export default BookComponent;
