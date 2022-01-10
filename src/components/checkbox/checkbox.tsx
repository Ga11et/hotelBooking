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
                <span className={css.pseudo}></span>
            </>
        }}

    </Field>
}