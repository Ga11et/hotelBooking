import { FC } from "react";
import css from './radiobutton.module.css'

type props = {
    name: string
    label: string
}

export const RadioButton:FC<props> = ({ name, label }) => {
    return <label className={css.radioContainer}>
        <input type={'radio'} name={name} />
        <span></span>
        <p>{label}</p>
    </label>
}