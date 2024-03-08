import React from "react";
import styles from "./CardsList.module.css";
import Card from "@/app/components/Card/Card";
import PropTypes from "prop-types";

const CardsList = ({ id, title, data }) => {
    return (
        <section className={styles["list-section"]}>
            <h2 className={styles["list-section__title"]} id={id}>
                {title}
            </h2>
            <ul className={styles["cards-list"]}>
                {data.map((item, i) => (
                    <Card key={i} {...item} />
                ))}
            </ul>
        </section>
    );
};

CardsList.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array
};

export default CardsList;
