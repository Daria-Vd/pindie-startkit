import React from "react";
import NewCardsFragment from "./NewCardsFragment";
import styles from "./CardsList.module.css";

const NewCardsList = () => {
    return (
        <section className={styles["list-section"]}>
            <h2 className={styles["list-section__title"]} id="new">
                Новинки
            </h2>
            <ul className={styles["cards-list"]}>
                <NewCardsFragment />
            </ul>
        </section>
    );
};

export default NewCardsList;