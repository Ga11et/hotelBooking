import { FC, HTMLInputTypeAttribute } from "react";
import css from './input.module.css'

type props = {
    name?: string
    id?: string
    type: HTMLInputTypeAttribute
    placeholder: string

    onFocus?: (event: any) => JQuery<HTMLElement>
}

export const Input: FC<props> = ({name, type, placeholder, onFocus, id}) => {
    return <div className={css.field}>
        {name && <h3>{name}</h3>}
        <input type={type}
            placeholder={placeholder}
            onFocus={onFocus && onFocus}
            id={id && id} />
    </div>
}