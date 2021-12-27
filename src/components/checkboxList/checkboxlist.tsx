import { FC, useState } from "react";
import css from './checkboxlist.module.css'
import $ from 'jquery'
import { Checkbox } from "../checkbox/checkbox";

type props = {
    id: string
    name: string
    list: string[]
}

export const CheckBoxList: FC<props> = ({ name, list, id }) => {

    const [handlerMode, setHundlerMode] = useState(false)

    const handlerOnClick = () => {
        if (handlerMode) {
            $('#' + id).slideUp(400, 'swing')
            $('#' + id + 'handler').removeClass(css.expanded)
            setHundlerMode(false)
        } else {
            $('#' + id).slideDown(400, 'swing')
            $('#' + id + 'handler').addClass(css.expanded)
            setHundlerMode(true)
        }
    }

    return <section className={css.expandableChecksContainer}>
        <div className={css.dropdownHandler}
            id={id + 'handler'}
            onClick={handlerOnClick} >
            <h3>{name}</h3>
        </div>
        <div className={css.dropdown}
            style={{ display: 'none' }}
            id={id} >
            {list.map( el => <CheckboxContainer key={el} label={el} />)}
        </div>
    </section>
}

type checkboxProps = {
    label: string
}

const CheckboxContainer: FC<checkboxProps> = ({ label }) => {
    return <>
        <label className={css.checkbox}>
            <Checkbox label={label} />
            {label}
        </label>
    </>
}