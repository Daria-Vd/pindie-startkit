import React from "react";
import styles from "./Footer.module.css";
import FooterListFragment from "@/components/footer/FooterListFragment";

const Footer = () => {
    const listItemData = ["YT", "ВК", "TG"];
    return (
        <footer className={styles.footer}>
            <a href="/" className={styles["footer__logo"]}>
                <span className={styles["footer__logo-name"]}>pindie</span>
                <span className={styles["footer__logo-copy"]}>, XXI век</span>
            </a>
            <ul className={styles["social-list"]}>
                {listItemData.map((title, i) => (
                    <FooterListFragment key={i} content={title} />
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
