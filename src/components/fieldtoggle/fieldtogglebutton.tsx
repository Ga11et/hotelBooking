import { Field, FieldProps } from "formik";
import { FC } from "react";
import css from './togglebutton.module.css'

type props = {
    name: string
    label: string
}

export const FieldToggleButton: FC<props> = ({ name, label }) => {
    return <label className={css.toggleContainer}>
        <Field name={name} >
            {({ field }: FieldProps) => <>
                <input type='checkbox' {...field} />
            </>}
        </Field>
        <span><span></span></span>
        <p>{label}</p>
    </label>
}