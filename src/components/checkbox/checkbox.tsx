import { FC } from "react"
import css from './checkbox.module.css'

type props = {
    label: string
    name: string
}

export const Checkbox: FC<props> = ({ label, name }) => {
    return <>
        <input type='checkbox' 
            name={name}
            value={label}
            className={css.input} />
        <span className={css.pseudo}></span>
    </>
}