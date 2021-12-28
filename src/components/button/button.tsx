import { FC } from "react";
import css from './button.module.css'

type props = {
    text: string
    type: 'filled' | 'empty' | 'link'

    onClick: () => void
}

export const Button: FC<props> = ({ text, type, onClick }) => {

    const buttonClass = type === 'filled' ? css.filledButton
        : (type === 'empty' ? css.emptyButton : css.linkButton)

    return <button className={buttonClass} onClick={onClick}>
        {text}
    </button>
}