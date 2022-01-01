import { FC } from "react";
import css from './landing.module.css'
import background from '../../assets/lending/background.jpg'
import { FindRooms } from "../../templates/findrooms/findrooms";


type props = {

}

const Landing: FC<props> = ({  }) => {
    return <>
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
    </>
}

export default Landing