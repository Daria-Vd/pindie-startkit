import React from "react";
import styles from "@/components/footer/Footer.module.css";
import PropTypes from "prop-types";

const FooterListFragment = ({ content }) => {
    return (
        <li className={styles["social-list__item"]}>
            <a href="" className={`button ${styles["social-list__link"]}`}>
                {content}
            </a>
        </li>
    );
};

FooterListFragment.propTypes = {
    content: PropTypes.string
};

export default FooterListFragment;
