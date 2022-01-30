import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components.module.scss";

export function Navbar() {
    return(
        <div className={styles.navbar}>
            <img src="/logo.png" alt="logo" />

            <Link to="/">           HOME        </Link>
            <Link to="/about">      ABOUT US    </Link>
            <Link to="/brand">      FIRST       </Link>
            <Link to="/sponsors">   SPONSORS     </Link>
            <Link to="/support">    SUPPORT US!     </Link>
        </div>
    );
}