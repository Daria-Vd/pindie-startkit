import React, { useEffect, useState } from "react";
import { useStore } from "@/app/store/app-store";
import Styles from "./AuthForm.module.css";
import PropTypes from "prop-types";
import { authorize, isResponseOk } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export const AuthForm = ({ close }) => {
    const { login, user } = useStore();
    const [authData, setAuthData] = useState({
        identifier: "",
        password: ""
    });

    const [message, setMessage] = useState({
        status: "",
        text: ""
    });

    useEffect(() => {
        let timer;
        if (user) {
            timer = setTimeout(() => {
                close();
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [user]);

    const handleInput = ({ target }) => {
        setAuthData((prevAuthData) => ({
            ...prevAuthData,
            [target.name]: target.value
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = await authorize(endpoints.auth, authData);
        if (isResponseOk(userData)) {
            login(userData.user, userData.jwt);
            setMessage({
                status: "success",
                text: "You are logged in!"
            });
        } else {
            setMessage({
                status: "error",
                text: "Incorrect password or email"
            });
        }
    };

    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            <h2 className={Styles.form__title}>Авторизация</h2>
            <div className={Styles.form__fields}>
                <label className={Styles.form__field}>
                    <span className={Styles["form__field-title"]}>Email</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        name="identifier"
                        type="email"
                        placeholder="hello@world.com"
                    />
                </label>
                <label className={Styles.form__field}>
                    <span className={Styles["form__field-title"]}>Пароль</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        name="password"
                        type="password"
                        placeholder="***********"
                    />
                </label>
            </div>
            {message.status && (
                <p className={Styles.form__message}>{message.text}</p>
            )}

            <div className={Styles.form__actions}>
                <button className={Styles.form__reset} type="reset">
                    Очистить
                </button>
                <button className={Styles.form__submit} type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};

AuthForm.propTypes = {
    close: PropTypes.func,
    setAuth: PropTypes.func
};
