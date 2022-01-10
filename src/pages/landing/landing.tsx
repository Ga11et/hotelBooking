import { Dispatch, FC, SetStateAction } from "react";
import css from './landing.module.css'
import background from '../../assets/lending/background.jpg'
import { FindRooms } from "../../templates/findrooms/findrooms";


type props = {
    setGuests: Dispatch<SetStateAction<{ first: number; second: number; third: number; }>>
    setDates: Dispatch<SetStateAction<{start: null, end: null}>>
}

const Landing: FC<props> = ({ setGuests, setDates }) => {

    const onClickHandler = (dates: {start: null, end: null}, guests: { first: number; second: number; third: number; }) => {
        setGuests(guests)
        setDates(dates)
    }

    return <>
        <main className={css.contentContainer}>
            <img src={background} alt="background" />
            <FindRooms id="main"
                onClick={onClickHandler}
                title="Найдём номера под ваши пожелания"
            />
            <p>
                Лучшие номера для вашей работы, отдыха и просто вдохновения
            </p>
        </main>
    </>
}

export default Landing