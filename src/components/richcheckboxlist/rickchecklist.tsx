import { FC } from "react";
import { Checkbox } from "../checkbox/checkbox";
import css from './richchecklist.module.css'

type checkboxData = {label: string, describtion: string}

type props = {
    name: string,
    data: checkboxData[]
}

export const RichCkeckList: FC<props> = ({ name, data }) => {
    return <section className={css.richCkecksContainer}>
        <h3>{name}</h3>
        {data.map( el => <CheckboxContainer key={el.label} data={el} />)}
    </section>
}

type CheckboxContainerProps = {
    data: checkboxData
}

const CheckboxContainer: FC<CheckboxContainerProps> = ({ data }) => {
    return <label className={css.checkbox}>
        <Checkbox label={data.label} />
        <div className={css.checkboxData}>
            {data.label}
            <p>{data.describtion}</p>
        </div>
    </label>
}