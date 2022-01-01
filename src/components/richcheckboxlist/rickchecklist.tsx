import { FC } from "react";
import { Checkbox } from "../checkbox/checkbox";
import css from './richchecklist.module.css'

type checkboxData = {id: string, label: string, describtion: string}

type props = {
    name: string,
    data: checkboxData[]
    title: string
}

export const RichCkeckList: FC<props> = ({ name, data, title }) => {
    return <section className={css.richCkecksContainer}>
        <h3>{title}</h3>
        {data.map( el => <CheckboxContainer key={el.id} data={el} name={name} />)}
    </section>
}

type CheckboxContainerProps = {
    data: checkboxData
    name: string
}

const CheckboxContainer: FC<CheckboxContainerProps> = ({ data, name }) => {
    return <label className={css.checkbox}>
        <Checkbox label={data.label} name={name} />
        <div className={css.checkboxData}>
            {data.label}
            <p>{data.describtion}</p>
        </div>
    </label>
}