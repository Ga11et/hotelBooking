import { Dispatch, FC, SetStateAction, useState } from "react";
import { Input } from "../input/input";
import css from './dropdown.module.css'
import $ from 'jquery'

type props = {

}

export const Dropdown: FC<props> = ({ }) => {

    const [Item1Value, setItem1Value] = useState(2)
    const [Item2Value, setItem2Value] = useState(2)
    const [Item3Value, setItem3Value] = useState(0)
    const [button1Disabled, setButton1Disabled] = useState(false)
    const [button2Disabled, setButton2Disabled] = useState(false)
    const [button3Disabled, setButton3Disabled] = useState(true)

    const inputOnClick = () => {
        $('.' + css.dropdown).slideDown(600, 'swing')
        $('#input').attr('style', 'border-color: var(--grey-50); border-bottom-color: transparent; border-radius: 4px 4px 0 0;')
    }
    const buttontOnClick = () => {
        $('.' + css.dropdown).slideUp(600, 'swing')
        setTimeout(() => {
            $('#input').attr('style', 'border-color: var(--grey-25); border-radius: 4px;')
        }, 600)
    }

    return <>
        <div className={css.dropbox}>
            <Input type='text'
                placeholder="2 спальни, 2 кровати"
                value={`${Item1Value} спальни, ${Item2Value} кровати, ${Item3Value} ванных`}
                onClick={inputOnClick}
                readonly
                isWithIndicator
                id="input" />
            <div className={css.dropdown} 
                style={{ display: 'none' }}
                 >
                <DropItem title="спальни"
                    number={Item1Value}
                    setItemValue={setItem1Value}
                    isButtonDisabled={button1Disabled}
                    setButtonDisabling={setButton1Disabled} />
                <DropItem title="кровати"
                    number={Item2Value}
                    setItemValue={setItem2Value}
                    isButtonDisabled={button2Disabled}
                    setButtonDisabling={setButton2Disabled} />
                <DropItem title="ванные комнаты"
                    number={Item3Value}
                    setItemValue={setItem3Value}
                    isButtonDisabled={button3Disabled}
                    setButtonDisabling={setButton3Disabled} />
                <button className={css.apply}
                    onClick={buttontOnClick}>
                    применить</button>
            </div>
        </div>
    </>
}

type itempProps = {
    title: string
    number: number
    isButtonDisabled: boolean

    setButtonDisabling: Dispatch<SetStateAction<boolean>>
    setItemValue: Dispatch<SetStateAction<number>>
}

const DropItem: FC<itempProps> = ({ title, number, setItemValue, isButtonDisabled, setButtonDisabling }) => {


    const set1ButtonValue = () => setItemValue((actual: number) => {
        if (actual - 1 > 0) {
            return actual - 1
        }
        if (actual - 1 === 0) {
            setButtonDisabling(true)
            return actual - 1
        }
        return actual
    })
    const set2ButtonValue = () => setItemValue((actual: number) => {
        if (isButtonDisabled === true) setButtonDisabling(false)
        return actual + 1
    })

    return <div className={css.dropItem}>
        <label>{title}</label>
        <div className={css.itemChanging}>
            <button onClick={set1ButtonValue} disabled={isButtonDisabled} >-</button>
            <label>{number}</label>
            <button onClick={set2ButtonValue} >+</button>
        </div>
    </div>
}
