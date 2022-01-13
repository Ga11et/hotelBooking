import { Field, FieldProps } from "formik"
import { FC } from "react"
import css from './checkbox.module.css'

type props = {
    label: string
    name: string

    submitForm?: (() => Promise<void>) & (() => Promise<any>)
}

export const Checkbox: FC<props> = ({ label, name, submitForm }) => {
    return <Field name={name}>
        {({ field: { value }, form: { setFieldValue } }: FieldProps) => {
            const onClickHandler = () => {
                value ? setFieldValue(name, false) : setFieldValue(name, true)
                if (submitForm) {
                    submitForm()
                }
            }
            return <>
                <input type='checkbox'
                    className={css.input}
                    onClick={onClickHandler} />
                <span className={css.pseudo}>
                    <svg className={css.pseudoCheck}
                        width={9} height={12}
                        viewBox="0 0 120 120"
                    >
                        <defs>
                            <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#BC9CFF" />
                                <stop offset="100%" stopColor="#8BA4F9" />
                            </linearGradient>
                        </defs>
                        <polyline points="35,110 110,110, 110,110 110,10"
                            stroke='url(#Gradient2)'
                        strokeWidth="25"
                        fill="none"
                        />
                    </svg>
                </span>
            </>
        }}

    </Field>
}