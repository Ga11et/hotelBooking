import { FC } from "react";
import css from './login.module.css'
import backImage from '../../assets/register/background.jpg'
import { Login } from "../../templates/enter/enter";

type props = {

}

export const LoginPage: FC<props> = ({  }) => {
    return <main className={css.loginConatainer}>
        <img src={backImage} alt="back" />
        <Login title="Войти" />
    </main>
}