import { FC, useState } from "react";
import { Input } from "../input/input";
import css from './dropdown.module.css'
import $ from 'jquery'
import { Field, FieldProps } from "formik";

type props = {
    type: 'buttons' | 'default'
    name: string
    id: string
    title: string
}

export const Dropdown: FC<props> = ({ name, type, id, title }) => {

    const itemsStartValue = type === 'default' ? { first: 2, second: 2, third: 0 } : { first: 0, second: 0, third: 0 }
    const buttonsStartValue = type === 'default' ? { first: false, second: false, third: true } : { first: true, second: true, third: true }

    const [itemsValue, setItemsValue] = useState(() => itemsStartValue)
    const setItem1Value = (value: number) => setItemsValue((actual) => ({ ...actual, first: value }))
    const setItem2Value = (value: number) => setItemsValue((actual) => ({ ...actual, second: value }))
    const setItem3Value = (value: number) => setItemsValue((actual) => ({ ...actual, third: value }))

    const [buttonsDisabling, setButtonsDesabling] = useState(() => buttonsStartValue)
    const setButton1Disabled = (value: boolean) => setButtonsDesabling((actual) => ({ ...actual, first: value }))
    const setButton2Disabled = (value: boolean) => setButtonsDesabling((actual) => ({ ...actual, second: value }))
    const setButton3Disabled = (value: boolean) => setButtonsDesabling((actual) => ({ ...actual, third: value }))

    const inputOnClick = () => {
        $("#dropDown" + id).slideDown(600, 'swing')
        $('#' + id).attr('style', 'border-color: var(--grey-50); border-bottom-color: transparent; border-radius: 4px 4px 0 0;')
    }
    const applytOnClick = () => {
        $("#dropDown" + id).slideUp(600, 'swing')
        setTimeout(() => {
            $('#' + id).attr('style', 'border-color: var(--grey-25); border-radius: 4px;')
        }, 600)
    }
    const clearOnClick = () => {
        setItemsValue((actual) => ({ ...actual, first: 0, second: 0, third: 0 }))
        setButtonsDesabling((actual) => ({ ...actual, first: true, second: true, third: true }))
    }


    const buttonsModOneCondition = (value: number) => {
        return value % 10 === 1 && (value > 20 || value < 10)
    }
    const buttonsValueCondition = (value: number) => {
        return value % 10 > 4 || value % 10 === 0 || (value < 20 && value > 10)
    }
    const buttonsValueWithConditions = (value: number, optionOne: string, optionsTwo: string, optionThree: string) => {
        return value.toString() + (buttonsModOneCondition(value) ? optionOne : (buttonsValueCondition(value) ? optionsTwo : optionThree))
    }

    let defaultValue: string, buttonsStringValue: string

    if (JSON.stringify(itemsValue) !== JSON.stringify({ first: 0, second: 0, third: 0 })) {
        defaultValue = `${itemsValue.first} спальни, ${itemsValue.second} кровати, ${itemsValue.third} ванных`
        const buttonsNumberValue = itemsValue.first + itemsValue.second + itemsValue.third
        const buttonsChildStringValue = itemsValue.third !== 0 ? ', ' + buttonsValueWithConditions(itemsValue.third, ' младенец', ' младенцев', ' младенца') : ''
        buttonsStringValue = buttonsValueWithConditions(buttonsNumberValue, ' гость', ' гостей', ' гостя') + buttonsChildStringValue
    } else {
        defaultValue = '2 спальни, 2 кровати, 0 ванных'
        buttonsStringValue = 'Сколько гостей'
    }


    return <>
        <div className={css.dropdownContainer}>
            <h3>{title}</h3>
            <Field name={name} >
                {({ form: { setFieldValue } }: FieldProps) => {

                    const applytOnClickAlt = () => {
                        setFieldValue(name, itemsValue)
                        applytOnClick()
                    }

                    return <>
                        <Input fieldType="default" type='text'
                            customValue={type === 'default' ? defaultValue : buttonsStringValue}
                            onClick={inputOnClick}
                            readonly
                            isWithIndicator
                            id={id}
                        />
                        <div className={css.dropdown}
                            style={{ display: 'none' }}
                            id={"dropDown" + id}
                            onMouseLeave={type === 'buttons' ? undefined : applytOnClickAlt}
                        >

                            <DropItem title={type === 'default' ? "спальни" : 'взрослые'}
                                number={itemsValue.first}
                                setItemValue={setItem1Value}
                                isButtonDisabled={buttonsDisabling.first}
                                setButtonDisabling={setButton1Disabled} />
                            <DropItem title={type === 'default' ? "кровати" : 'дети'}
                                number={itemsValue.second}
                                setItemValue={setItem2Value}
                                isButtonDisabled={buttonsDisabling.second}
                                setButtonDisabling={setButton2Disabled} />
                            <DropItem title={type === 'default' ? "ванные комнаты" : 'младенцы'}
                                number={itemsValue.third}
                                setItemValue={setItem3Value}
                                isButtonDisabled={buttonsDisabling.third}
                                setButtonDisabling={setButton3Disabled} />

                            {/* Buttons */}

                            {type === 'buttons' ? <div className={css.buttons}>
                                {JSON.stringify(itemsValue) !== JSON.stringify({ first: 0, second: 0, third: 0 })
                                    ? <button className={css.clear}
                                        type="button"
                                        onClick={clearOnClick}>
                                        очистить</button> : <div></div>}
                                <button className={css.apply}
                                    type="button"
                                    onClick={applytOnClickAlt}>
                                    применить</button>
                            </div> : null}

                        </div>
                    </>
                }}
            </Field>


        </div>
    </>
}

type itempProps = {
    title: string
    number: number
    isButtonDisabled: boolean

    setButtonDisabling: (value: boolean) => void
    setItemValue: (value: number) => void
}

const DropItem: FC<itempProps> = ({ title, number, setItemValue, isButtonDisabled, setButtonDisabling }) => {

    const set1ButtonValue = () => {
        if (number - 1 > 0) {
            setItemValue(number - 1)
        }
        if (number - 1 === 0) {
            setButtonDisabling(true)
            setItemValue(number - 1)
        }
    }
    const set2ButtonValue = () => {
        if (isButtonDisabled === true) setButtonDisabling(false)
        setItemValue(number + 1)
    }

    return <div className={css.dropItem}>
        <label>{title}</label>
        <div className={css.itemChanging}>
            <button onClick={set1ButtonValue} disabled={isButtonDisabled} type="button" >-</button>
            <label>{number}</label>
            <button onClick={set2ButtonValue} type="button" >+</button>
        </div>
    </div>
}
