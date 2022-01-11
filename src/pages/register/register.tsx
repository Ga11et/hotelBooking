import { FC } from "react";
import css from './register.module.css'
import backImage from '../../assets/register/background.jpg'
import { Register } from "../../templates/register/register";

type props = {

}

export const RegisterPage: FC<props> = ({  }) => {
    return <main className={css.registerContainer}>
        <img src={backImage} alt="back" />
        <Register
            title="Регистрация аккаунта"
        />
    </main>
}