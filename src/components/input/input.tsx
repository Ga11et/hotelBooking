import { FC, HTMLInputTypeAttribute } from "react";
import css from './input.module.css'
import $ from 'jquery'

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

export const Input: FC<props> = ({ fieldType, name, type, placeholder, onClick, id, value, onFocus, readonly = false, isWithIndicator = false}) => {
    if  (fieldType === 'masked') {

        const maskedOnFocus = () => {
            $('.' + css.masked).addClass(css.maskedTouched)
            $('.' + css.masked).removeClass(css.masked)

        }

        return <div className={css.field}>
            {name && <h3>{name}</h3>}
            <input type={type}
                readOnly={readonly}
                placeholder={placeholder}
                onClick={onClick && onClick}
                onFocus={maskedOnFocus}
                id={id && id}
                maxLength={8}
                value={value && value}
                className={css.masked} />
            </div>
    }
    if  (fieldType === 'subscribtion') return <div className={css.field}>
    {name && <h3>{name}</h3>}
    <input type={type}
        readOnly={readonly}
        placeholder={placeholder}
        onClick={onClick && onClick}
        onFocus={onFocus && onFocus}
        id={id && id}
        value={value !== undefined ? value : undefined}
        className={css.subscribtion} />
    </div>
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