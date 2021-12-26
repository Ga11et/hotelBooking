import { FC, HTMLInputTypeAttribute } from "react";
import css from './input.module.css'

type props = {
    name?: string
    id?: string
    value?: string
    readonly?: boolean
    isWithIndicator?: boolean
    type: HTMLInputTypeAttribute
    placeholder: string,

    onFocus?: (event: any) => JQuery<HTMLElement>
    onClick?: (event: any) => void
    onBlur?: (event: any) => JQuery<HTMLElement>
}

export const Input: FC<props> = ({name, type, placeholder, onClick, id, value, onBlur, onFocus, readonly = false, isWithIndicator = false}) => {
    return <div className={css.field}>
        {name && <h3>{name}</h3>}
        <input type={type}
            readOnly={readonly}
            placeholder={placeholder}
            onClick={onClick && onClick}
            onFocus={onFocus && onFocus}
            onBlur={onBlur && onBlur}
            id={id && id}
            value={value !== undefined ? value : undefined}
            className={isWithIndicator ? css.withIndicator : undefined} />
    </div>
}