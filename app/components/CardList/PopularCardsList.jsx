import React from "react";
import PopularCardsFragment from "./PopularCardsFragment";
import styles from "./CardsList.module.css";

const PopularCardsList = () => {
    return (
        <section className={styles["list-section"]}>
            <h2 className={styles["list-section__title"]} id="popular">
                Популярное
            </h2>
            <ul className={styles["cards-list"]}>
                <PopularCardsFragment />
            </ul>
        </section>
    );
};

export default PopularCardsList;
