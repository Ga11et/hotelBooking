import { FC, useState } from "react";
import { Input } from "../input/input";
import css from './dropdown.module.css'
import $ from 'jquery'

type props = {
    type: 'buttons' | 'default'
    id: string
}

export const Dropdown: FC<props> = ({ type, id }) => {

    const [itemsValue, setItemsValue] = useState(() => ({first: 2, second: 2, third: 0}))
    const setItem1Value = (value: number) => setItemsValue( (actual) => ({ ...actual, first: value }))
    const setItem2Value = (value: number) => setItemsValue( (actual) => ({ ...actual, second: value }))
    const setItem3Value = (value: number) => setItemsValue( (actual) => ({ ...actual, third: value }))

    const [buttonsDisabling, setButtonsDesabling] = useState( () => ({ first: false, second: false, third: true }))
    const setButton1Disabled = (value: boolean) => setButtonsDesabling( (actual) => ({ ...actual, first: value }))
    const setButton2Disabled = (value: boolean) => setButtonsDesabling( (actual) => ({ ...actual, second: value }))
    const setButton3Disabled = (value: boolean) => setButtonsDesabling( (actual) => ({ ...actual, third: value }))

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
        setItemsValue( (actual) => ({ ...actual, first: 2, second: 2, third: 0 }))
        setButtonsDesabling( (actual) => ({ ...actual, first: false, second: false, third: true }))
    }

    return <>
        <div className={css.dropbox}>
            <Input type='text'
                placeholder="2 спальни, 2 кровати"
                value={`${itemsValue.first} спальни, ${itemsValue.second} кровати, ${itemsValue.third} ванных`}
                onClick={inputOnClick}
                readonly
                isWithIndicator
                id={id} />
            <div className={css.dropdown} 
                style={{ display: 'none' }}
                id={"dropDown" + id}
                onMouseLeave={ type === 'buttons' ? undefined : applytOnClick }
                >

                <DropItem title="спальни"
                    number={itemsValue.first}
                    setItemValue={setItem1Value}
                    isButtonDisabled={buttonsDisabling.first}
                    setButtonDisabling={setButton1Disabled} />
                <DropItem title="кровати"
                    number={itemsValue.second}
                    setItemValue={setItem2Value}
                    isButtonDisabled={buttonsDisabling.second}
                    setButtonDisabling={setButton2Disabled} />
                <DropItem title="ванные комнаты"
                    number={itemsValue.third}
                    setItemValue={setItem3Value}
                    isButtonDisabled={buttonsDisabling.third}
                    setButtonDisabling={setButton3Disabled} />

                {/* Buttons */}

                {type === 'buttons' ? <div className={css.buttons}>
                    {JSON.stringify(itemsValue) !== JSON.stringify({first: 2, second: 2, third: 0}) ? <button className={css.clear}
                            onClick={clearOnClick}>
                            очистить</button> : <div></div>}
                    <button className={css.apply}
                        onClick={applytOnClick}>
                        применить</button>
                </div> : null}

            </div>
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
            <button onClick={set1ButtonValue} disabled={isButtonDisabled} >-</button>
            <label>{number}</label>
            <button onClick={set2ButtonValue} >+</button>
        </div>
    </div>
}