import { FC, HTMLInputTypeAttribute } from "react";
import css from './input.module.css'
import $ from 'jquery'

type props = {
    title?: string
    id?: string
    customValue?: string
    readonly?: boolean
    isWithIndicator?: boolean
    placeholder?: string
    name?: string
    type: HTMLInputTypeAttribute
    fieldType: 'default' | 'masked' | 'subscribtion'


    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
}

export const Input: FC<props> = ({ name, title, fieldType, type, placeholder, onClick, id, customValue, onFocus, readonly = false, isWithIndicator = false }) => {
    if (fieldType === 'masked') {

        const maskedOnFocus = () => {
            $('.' + css.masked).addClass(css.maskedTouched)
            $('.' + css.masked).removeClass(css.masked)

        }

        return <div className={css.field}>
            {title && <h3>{title}</h3>}
            <input type={type}
                readOnly={readonly}
                placeholder={placeholder}
                onClick={onClick && onClick}
                onFocus={maskedOnFocus}
                id={id && id}
                maxLength={8}
                value={customValue}
                className={css.masked} />
        </div>
    }
    return <div className={css.field}>
        {title && <h3>{title}</h3>}
        <label className={isWithIndicator ? css.withIndicator : undefined}>
            <input
                readOnly={readonly}
                placeholder={placeholder}
                onClick={onClick && onClick}
                onFocus={onFocus && onFocus}
                id={id && id}
                name={name}
                value={customValue}
            />
            <svg viewBox="0 0 110 65" width={12} height={8}>
                <polyline points="5,58 55,8, 55,8 105,58"
                    stroke="rgba(31, 32, 65, 0.5)"
                    strokeWidth="15"
                    fill="none"
                />
            </svg>
        </label>
    </div>
}