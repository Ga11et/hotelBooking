import { FC, useState } from "react";
import css from './slider.module.css'
import { Range } from 'rc-slider';
import { Field, FieldProps } from "formik";
type props = {
    name: string
    title: string

    submitForm?: (() => Promise<void>) & (() => Promise<any>)
}

export const MySlider: FC<props> = ({ name, title, submitForm }) => {

    const [rangeValues, setRangeValues] = useState([25,70])

    

    const sliderData = `${rangeValues[0]*200}₽ - ${rangeValues[1]*200}₽`

    return <section className={css.sliderContainer}>
        <div className={css.sliderHeader}>
            <h3>{title}</h3>
            <label>{sliderData}</label>
        </div>
        <div className={css.inputsContainer}>
            <Field name={name}>
                {( {form: { setFieldValue }}: FieldProps) => {

                    const rangeOnChange = (value: number[]) => {
                        setRangeValues(value)
                    }

                    const rangeOnAfterChange = (value: number[]) => {
                        setFieldValue(name, sliderData)
                        if (submitForm) {
                            submitForm()
                        }
                    }

                    return <>
                        <Range onChange={rangeOnChange}
                            defaultValue={[25,70]}
                            onAfterChange={rangeOnAfterChange} />
                    </>
                }}
            </Field>
            
        </div>
    </section>
    
}