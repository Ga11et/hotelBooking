import { FC, useState } from "react";
import css from './checkboxlist.module.css'
import $ from 'jquery'
import { Checkbox } from "../checkbox/checkbox";

type props = {
    id: string
    name: string
    list: string[]
    title: string
    type: 'default' | 'withDropdawn'
}

export const CheckBoxList: FC<props> = ({ name, list, id, title, type }) => {

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

    if (type === 'withDropdawn') {
        return <section className={css.expandableChecksContainer}>
            <div className={css.dropdownHandler}
                id={id + 'handler'}
                onClick={handlerOnClick} >
                <h3>{title}</h3>
            </div>
            <div className={css.dropdown}
                style={{ display: 'none' }}
                id={id} >
                {list.map(el => <CheckboxContainer key={el} label={el} name={name} />)}
            </div>
        </section>
    }

    return <section className={css.CheckboxContainer}>
        <h3>{title}</h3>
        {list.map(el => <CheckboxContainer key={el} label={el} name={name} />)}
    </section>

}

type checkboxProps = {
    label: string
    name: string
}

const CheckboxContainer: FC<checkboxProps> = ({ label, name }) => {
    return <>
        <label className={css.checkbox}>
            <Checkbox label={label} name={name} />
            {label}
        </label>
    </>
}