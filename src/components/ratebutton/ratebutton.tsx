import { FC, useState } from "react";
import css from './ratebutton.module.css'
import filledStar from '../../assets/filledStar.svg'
import emptyStar from '../../assets/emptyStar.svg'


type props = {
    countStars: number
}

export const RateButton: FC<props> = ({ countStars }) => {

    const [localCountStars, setLocalCountStars] = useState(() => countStars)
    const stars = [1, 2, 3, 4, 5]
    
    const callback = (value: number) => {
        console.log(value)
    }

    return <section className={css.starsContainer}>
        {stars.map(el => <img key={el} id={el.toString()}
            src={localCountStars >= el ? filledStar : emptyStar}
            alt="star"
            onMouseOver={() => setLocalCountStars(el)}
            onMouseLeave={() => setLocalCountStars(countStars)}
            onClick={() => callback(el)} />)}
    </section>
}