import React from "react";
import styles from "@/components/header/Header.module.css";
import PropTypes from "prop-types";

const HeaderListFragment = ({ title }) => {
    return (
        <li className={styles["menu__item"]}>
            <a href="" className={styles["menu__link"]}>
                {title}
            </a>
        </li>
    );
};

HeaderListFragment.propTypes = {
    title: PropTypes.string
};

export default HeaderListFragment;
