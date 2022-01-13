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
        <span className={css.pseudo}>
            <svg className={css.pseudoChecked}
                viewBox="0 0 12 12"
                width={15} height={15}    
            >
                <circle 
                    r={5}
                    cx={6}
                    cy={6}
                    stroke="none"
                    fill="var(--purple)"
                />
            </svg>
        </span>
        <p>{label}</p>
    </label>
}

