import { FC } from "react";
import { Header } from "../../templates/header/header";
import css from './landing.module.css'
import background from '../../assets/lending/background.jpg'
import { FindRooms } from "../../templates/findrooms/findrooms";
import { Footer } from "../../templates/footer/footer";


type props = {

}

export const Landing: FC<props> = ({  }) => {
    return <>
        <Header isAuth={false} />
        <main className={css.contentContainer}>
            <img src={background} alt="background" />
            <FindRooms id="main"
                onClick={() => console.log('clicked')}
                title="Найдём номера под ваши пожелания"
            />
            <p>
                Лучшие номера для вашей работы, отдыха и просто вдохновения
            </p>
        </main>
        <Footer />
    </>
}