import React from "react";
import styles from "./CardsList.module.css";

const PopularCardsFragment = () => {
    return (
        <>
            <li className={styles["cards-list__item"]}>
                <a href="/game-id.html" className={styles["card-list__link"]}>
                    <article className={styles.card}>
                        <img
                            src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
                            alt=""
                            className={styles.card__image}
                        />
                        <div className={styles["card__content-block"]}>
                            <h3 className={styles.card__title}>
                                Crystal Kepper
                            </h3>
                            <p className={styles.card__description}>
                                Управляй боевым дроном, чтобы любой ценой
                                защитить кристалл от враждебных космо-слизней.
                            </p>
                            <div className={styles["card__info-container"]}>
                                <p className={styles.card__author}>
                                    Автор:{" "}
                                    <span className={styles.card__accent}>
                                        Lonely Baobab
                                    </span>
                                </p>
                                <p className={styles.card__votes}>
                                    Голосов на сайте:{" "}
                                    <span className={styles.card__accent}>
                                        20
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>
                </a>
            </li>
            <li className={styles["cards-list__item"]}>
                <a href="/game-id.html" className={styles["card-list__link"]}>
                    <article className={styles.card}>
                        <img
                            src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
                            alt=""
                            className={styles.card__image}
                        />
                        <div className={styles["card__content-block"]}>
                            <h3 className={styles.card__title}>
                                Dangeons'n'Caves. Prologue
                            </h3>
                            <p className={styles.card__description}>
                                Безымянный герой исследует пещеры и подземелья,
                                чтобы найти больше информации о себе.
                            </p>
                            <div className={styles["card__info-container"]}>
                                <p className={styles.card__author}>
                                    Автор:{" "}
                                    <span className={styles.card__accent}>
                                        F-Style
                                    </span>
                                </p>
                                <p className={styles.card__votes}>
                                    Голосов на сайте:{" "}
                                    <span className={styles.card__accent}>
                                        10
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>
                </a>
            </li>
            <li className={styles["cards-list__item"]}>
                <a href="/game-id.html" className={styles["card-list__link"]}>
                    <article className={styles.card}>
                        <img
                            src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
                            alt=""
                            className={styles.card__image}
                        />
                        <div className={styles["card__content-block"]}>
                            <h3 className={styles.card__title}>
                                Defence of Crystal
                            </h3>
                            <p className={styles.card__description}>
                                Защищай магический кристалл от монстров и
                                уничтожай кладбища, чтобы спасти Землю, которую
                                поглотил мрак.
                            </p>
                            <div className={styles["card__info-container"]}>
                                <p className={styles.card__author}>
                                    Автор:{" "}
                                    <span className={styles.card__accent}>
                                        MastWe
                                    </span>
                                </p>
                                <p className={styles.card__votes}>
                                    Голосов на сайте:{" "}
                                    <span className={styles.card__accent}>
                                        20
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>
                </a>
            </li>
        </>
    );
};

export default PopularCardsFragment;
