import { FC } from "react"
import css from './checkbox.module.css'

type props = {
    label: string
}

export const Checkbox: FC<props> = ({ label }) => {
    return <>
        <input type='checkbox' 
            name={label}
            className={css.input} />
        <span className={css.pseudo}></span>
    </>
}