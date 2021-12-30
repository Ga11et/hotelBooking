import { Field } from "formik";
import { FC } from "react";
import css from './radiobutton.module.css'

type props = {
    name: string
    label: string
    value: string
}

export const FieldRadioButton:FC<props> = ({ name, label, value }) => {
    return <label className={css.radioContainer}>
        <Field name={name} >
            {({ field }: any) => <>
                <input {...field} type='radio' value={value} />
            </>}
        </Field>
        <span></span>
        <p>{label}</p>
    </label>
}

