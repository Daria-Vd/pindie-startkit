import React from "react";
import styles from "./CardsList.module.css";

const NewCardsFragment = () => {
    return (
        <>
            <li className={styles["cards-list__item"]}>
                <a href="/game-id.html" className={styles["card-list__link"]}>
                    <article className={styles.card}>
                        <img
                            src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
                            alt=""
                            className={styles.card__image}
                        />
                        <div className={styles["card__content-block"]}>
                            <h3 className={styles.card__title}>Go Away</h3>
                            <p className={styles.card__description}>
                                Управляй автомобилем, избегая аварий и
                                перепрыгивая препятствия на пути к следующему
                                уровню.
                            </p>
                            <div className={styles["card__info-container"]}>
                                <p className={styles.card__author}>
                                    Автор:{" "}
                                    <span className={styles.card__accent}>
                                        Mahisto
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
                            src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                            alt=""
                            className={styles.card__image}
                        />
                        <div className={styles["card__content-block"]}>
                            <h3 className={styles.card__title}>G.U.N.N.E.R.</h3>
                            <p className={styles.card__description}>
                                Продержись как можно дольше, отбиваясь от
                                врагов, которых будет становиться всё больше.
                            </p>
                            <div className={styles["card__info-container"]}>
                                <p className={styles.card__author}>
                                    Автор:{" "}
                                    <span className={styles.card__accent}>
                                        IDKWIAm
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
                            src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                            alt=""
                            className={styles.card__image}
                        />
                        <div className={styles["card__content-block"]}>
                            <h3 className={styles.card__title}>Space Terror</h3>
                            <p className={styles.card__description}>
                                Лети как можно дальше в космическом
                                пространстве, уничтожая всё на своём пути.
                            </p>
                            <div className={styles["card__info-container"]}>
                                <p className={styles.card__author}>
                                    Автор:{" "}
                                    <span className={styles.card__accent}>
                                        IDKWIAm
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
                            src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                            alt=""
                            className={styles.card__image}
                        />
                        <div className={styles["card__content-block"]}>
                            <h3 className={styles.card__title}>
                                Square Slayer
                            </h3>
                            <p className={styles.card__description}>
                                Уворачивайся и отстреливайся от озлобленных
                                квадратов и собирай жизни для перехода на
                                следующий уровень.
                            </p>
                            <div className={styles["card__info-container"]}>
                                <p className={styles.card__author}>
                                    Автор:{" "}
                                    <span className={styles.card__accent}>
                                        niclan
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
        </>
    );
};

export default NewCardsFragment;
