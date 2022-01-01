import { FC } from "react";
import css from './footer.module.css'
import logo from '../../assets/Logo.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import { SubscribtionForm } from "../../components/subscribeform/subscribeform";

type props = {

}

export const Footer: FC<props> = ({ }) => {
    return <footer className={css.footerContainer}>
        <section className={css.footerWidgets}>
            <div className={css.first}>
                <img src={logo} alt='logo' />
                <p>
                    Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
                </p>
            </div>
            <div>
                <label className={css.heading}>Навигация</label>
                <label>О нас</label>
                <label>Новости</label>
                <label>Служба поддержки</label>
                <label>Услуги</label>
            </div>
            <div>
                <label className={css.heading}>О нас</label>
                <label>О сервисе</label>
                <label>Наша команда</label>
                <label>Вакансии</label>
                <label>Инвесторы</label>
            </div>
            <div>
                <label className={css.heading}>Служба поддержки</label>
                <label>Соглашения</label>
                <label>Сообщества</label>
                <label>Связь с нами</label>
            </div> 
            <div className={css.fifth}>
                <label className={css.heading}>Подписка</label>
                <p>
                    Получайте специальные предложения и новости сервиса
                </p>
                <SubscribtionForm
                    type={'email'} 
                    placeholder="Email" />
            </div>
        </section>
        <section className={css.copyrightBar}>
            <label>Copyright © 2018 Toxin отель. Все права защищены.</label>
            <div className={css.icons}>
                <img src={twitter} alt='twitter' />
                <img src={facebook} alt='facebook' />
                <img src={instagram} alt='instagram' />
            </div>
        </section>
    </footer>
}