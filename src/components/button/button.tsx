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
        {type === 'big' && <svg viewBox="0 0 110 110" width={17} height={17}>
                <polyline points="55,8 105,58, 105,58 55,108"
                    stroke='white'
                    strokeWidth="12"
                    fill="none"
                />
                <line x1="0" y1="58" x2="100" y2="58"
                    stroke='white'
                    strokeWidth="12"
                />
            </svg>}
    </button>
}