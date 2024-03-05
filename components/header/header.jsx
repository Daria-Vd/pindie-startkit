import React from "react";
import styles from "./Header.module.css";
import HeaderListFragment from "@/components/header/HeaderListFragment";

const Header = () => {
    const titleData = [
        "Новинки",
        "Популярные",
        "Шутеры",
        "Раннеры",
        "Пиксельные",
        "TDS"
    ];
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <img
                    className={styles["logo__image"]}
                    src="/images/logo.svg"
                    alt="Логотип Pindie"
                />
            </a>
            <nav className={styles.menu}>
                <ul className={styles["menu__list"]}>
                    {titleData.map((title, i) => (
                        <HeaderListFragment key={i} title={title} />
                    ))}
                </ul>
                <div className={styles.auth}>
                    <button className={styles["auth__button"]}>Войти</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
