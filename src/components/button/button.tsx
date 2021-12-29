import { FC } from "react";
import css from './button.module.css'
import arrow from '../../assets/whiteRightArrow.svg'

type props = {
    text: string
    type: 'filled' | 'empty' | 'link' | 'big'
    isSubmit: boolean

    onClick: () => void
}

export const Button: FC<props> = ({ text, type, isSubmit, onClick }) => {

    const buttonClass = type === 'filled' ? css.filledButton
        : (type === 'empty' ? css.emptyButton 
        : (type === 'big' ? css.payment :  css.linkButton))

    return <button className={buttonClass} 
        onClick={onClick}
        type={isSubmit ? 'submit' : 'button'} >
        {text}
        {type === 'big' && <img src={arrow} alt="arrow" />}
    </button>
}