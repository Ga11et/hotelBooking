import { FC } from "react";
import css from './header.module.css'
import logo from '../../assets/Logo.svg'
import picker from '../../assets/datePicker.svg'
import { Button } from "../../components/button/button";

type props = {
    isAuth: boolean
    userName?: string
}

export const Header: FC<props> = ({ isAuth, userName }) => {
    return <header className={css.headerContainer}>
        <div className={css.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={css.aboutUs}>
            <label className={css.bold}>О нас</label>
            <label>Услуги<img src={picker} alt="picker" /></label>
            <label>Вакансии</label>
            <label>Новости</label>
            <label>Соглашения<img src={picker} alt="picker" /></label>
            {isAuth && <div className={css.accaunt}>
                <label>{userName}</label>
            </div>}
            {!isAuth && <div className={css.login}>
            <Button isSubmit={false} 
                onClick={() => console.log('clicked')}
                text="Войти"
                type="empty"
            />
            <Button isSubmit={false} 
                onClick={() => console.log('clicked')}
                text="Зарегистрироваться"
                type="filled"
            />
        </div>}
            
        </div>
    </header>
}