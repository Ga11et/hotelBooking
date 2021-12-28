import { FC, HTMLInputTypeAttribute } from "react";
import css from './input.module.css'

type props = {
    name?: string
    id?: string
    value?: string
    readonly?: boolean
    isWithIndicator?: boolean
    placeholder?: string
    type: HTMLInputTypeAttribute
    fieldType: 'default' | 'masked' | 'subscribtion'


    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
}

export const Input: FC<props> = ({name, type, placeholder, onClick, id, value, onFocus, readonly = false, isWithIndicator = false}) => {
    return <div className={css.field}>
        {name && <h3>{name}</h3>}
        <input type={type}
            readOnly={readonly}
            placeholder={placeholder}
            onClick={onClick && onClick}
            onFocus={onFocus && onFocus}
            id={id && id}
            value={value !== undefined ? value : undefined}
            className={isWithIndicator ? css.withIndicator : undefined} />
    </div>
}