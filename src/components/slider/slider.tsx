import { FC, useState } from "react";
import css from './slider.module.css'
import { Range } from 'rc-slider';
type props = {
    name: string
}

export const MySlider: FC<props> = ({ name }) => {

    const [rangeValues, setRangeValues] = useState([25,70])

    const rangeOnChange = (value: number[]) => {
        setRangeValues(value)
    }

    const sliderData = `${rangeValues[0]*200}₽ - ${rangeValues[1]*200}₽`

    return <section className={css.sliderContainer}>
        <div className={css.sliderHeader}>
            <h3>{name}</h3>
            <label>{sliderData}</label>
        </div>
        <div className={css.inputsContainer}>
            <Range onChange={rangeOnChange}
                defaultValue={[25,70]} />
        </div>
    </section>
    
}