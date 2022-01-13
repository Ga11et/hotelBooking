import { FC } from "react";
import css from './header.module.css'
import logo from '../../assets/Logo.svg'
import picker from '../../assets/datePicker.svg'
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router";

type props = {
    isAuth: boolean
    userName?: string
}

export const Header: FC<props> = ({ isAuth, userName }) => {

    const navigate = useNavigate()

    return <header className={css.headerContainer}>
        <div className={css.logo}>
            <img src={logo} alt="logo" onClick={() => navigate('/landing')} />
        </div>
        <div className={css.aboutUs}>
            <label className={css.bold}>О нас</label>
            <label>Услуги<SVG /></label>
            <label>Вакансии</label>
            <label>Новости</label>
            <label>Соглашения<SVG /></label>
            {isAuth && <div className={css.accaunt}>
                <label>{userName}</label>
            </div>}
            {!isAuth && <div className={css.login}>
            <Button isSubmit={false} 
                onClick={() => navigate('/login')}
                text="Войти"
                type="empty"
            />
            <Button isSubmit={false} 
                onClick={() => navigate('/register')}
                text="Зарегистрироваться"
                type="filled"
            />
        </div>}
            
        </div>
    </header>
}

const SVG: FC<{}> = ({  }) => {
    return <>
        <svg viewBox="0 0 110 65" width={13} height={8} style={{ transform: 'rotate(180deg)' }}>
            <polyline points="5,58 55,8, 55,8 105,58"
                stroke="rgba(31, 32, 65, 0.5)"
                strokeWidth="16"
                fill="none"
            />
        </svg>
    </>
}