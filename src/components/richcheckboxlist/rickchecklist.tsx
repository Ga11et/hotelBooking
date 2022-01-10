import { FC } from "react";
import { Checkbox } from "../checkbox/checkbox";
import css from './richchecklist.module.css'

type checkboxData = {id: string, label: string, describtion: string}

type props = {
    name: string,
    data: checkboxData[]
    title: string

    submitForm?: (() => Promise<void>) & (() => Promise<any>)
}

export const RichCkeckList: FC<props> = ({ name, data, title, submitForm }) => {
    return <section className={css.richCkecksContainer}>
        <h3>{title}</h3>
        {data.map( el => <CheckboxContainer key={el.id} data={el} name={name} submitForm={submitForm} />)}
    </section>
}

type CheckboxContainerProps = {
    data: checkboxData
    name: string
    
    submitForm?: (() => Promise<void>) & (() => Promise<any>)
}

const CheckboxContainer: FC<CheckboxContainerProps> = ({ data, submitForm }) => {
    return <label className={css.checkbox}>
        <Checkbox label={data.label} name={data.label} submitForm={submitForm} />
        <div className={css.checkboxData}>
            {data.label}
            <p>{data.describtion}</p>
        </div>
    </label>
}