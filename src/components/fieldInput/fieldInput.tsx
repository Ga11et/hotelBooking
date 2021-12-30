import { FC, HTMLInputTypeAttribute } from "react";
import css from './input.module.css'
import $ from 'jquery'
import { Field, FieldProps } from "formik";

type props = {
    title?: string
    id?: string
    customValue?: string
    readonly?: boolean
    placeholder?: string
    isWithIndicator?: boolean

    fieldType: 'default' | 'masked' | 'subscribtion'
    name: string
    type: HTMLInputTypeAttribute

    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
}

export const FieldInput: FC<props> = ({ name, title, fieldType, ...props }) => {
    if (fieldType === 'masked') {

        const maskedOnFocus = () => {
            $('.' + css.masked).addClass(css.maskedTouched)
            $('.' + css.masked).removeClass(css.masked)
        }

        return <div className={css.field}>
            {title && <h3>{title}</h3>}
            <Field name={name} >
                {({ field }: FieldProps) => <>
                    <Input {...field} {...props} className={css.masked}
                        onFocus={maskedOnFocus} />
                </>}
            </Field>
        </div>
    }
    
    return <div className={css.field}>
        {title && <h3>{title}</h3>}
        <Field name={name} >
            {({ field }: FieldProps) => <>
                    <Input {...field} {...props} />
                </>
            }
        </Field>
    </div>
}

type inputProps = {
    id?: string
    customValue?: string
    readonly?: boolean
    placeholder?: string
    isWithIndicator?: boolean
    className?: string

    type: HTMLInputTypeAttribute

    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
}

const Input: FC<inputProps> = ({ isWithIndicator, customValue, className, ...props }) => {
    return <>
        <input {...props}
            className={isWithIndicator ? css.withIndicator : className} />
    </>

}