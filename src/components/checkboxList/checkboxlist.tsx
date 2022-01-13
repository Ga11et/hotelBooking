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

    submitForm?: (() => Promise<void>) & (() => Promise<any>)
}

export const CheckBoxList: FC<props> = ({ name, list, id, title, type, submitForm }) => {

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
                <svg viewBox="0 0 110 65" width={13} height={8}>
                    <polyline points="5,58 55,8, 55,8 105,58"
                        stroke="rgba(31, 32, 65, 0.5)"
                        strokeWidth="16"
                        fill="none"
                    />
                </svg>
            </div>
            <div className={css.dropdown}
                style={{ display: 'none' }}
                id={id} >
                {list.map(el => <CheckboxContainer key={el} label={el} name={el} submitForm={submitForm} />)}
            </div>
        </section>
    }

    return <section className={css.CheckboxContainer}>
        <h3>{title}</h3>
        {list.map(el => <CheckboxContainer key={el} label={el} name={el} submitForm={submitForm} />)}
    </section>

}

type checkboxProps = {
    label: string
    name: string

    submitForm?: (() => Promise<void>) & (() => Promise<any>)
}

const CheckboxContainer: FC<checkboxProps> = ({ label, name, submitForm }) => {
    return <>
        <label className={css.checkbox}>
            <Checkbox label={label} name={name} submitForm={submitForm} />
            {label}
        </label>
    </>
}