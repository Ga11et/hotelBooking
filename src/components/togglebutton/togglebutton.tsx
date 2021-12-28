import { FC } from "react";
import css from './togglebutton.module.css'

type props = {
    name: string
    label: string
}

export const ToggleButton: FC<props> = ({ name, label }) => {
    return <label className={css.toggleContainer}>
        <input type='checkbox' name={name} />
        <span><span></span></span>
        <p>{label}</p>
    </label>
}