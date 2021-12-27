import { FC, useState } from "react";
import css from './checkboxlist.module.css'
import $ from 'jquery'

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

    return <>
        <div className={css.dropdownHandler}
            id={id + 'handler'}
            onClick={handlerOnClick} >
            <h3>{name}</h3>
        </div>
        <div className={css.dropdown}
            style={{ display: 'none' }}
            id={id} >
            {list.map( el => <Checkbox key={el} label={el} />)}
        </div>
    </>
}

type checkboxProps = {
    label: string
}

const Checkbox: FC<checkboxProps> = ({ label }) => {
    return <>
        <label className={css.checkbox}>
            <input type='checkbox' name={label} />
            <span className={css.pseudo}></span>
            {label}
        </label>
    </>
}