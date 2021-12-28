import { FC } from "react";
import css from './likebutton.module.css'
import emptyLike from '../../assets/emptyLike.svg'
import filledLike from '../../assets/filledLike.svg'

type props = {
    likes: number
    isTouched: boolean
}

export const LikeButton:FC<props> = ({ likes, isTouched }) => {
    return <>
        {isTouched ? <div className={css.activeButton}>
            <img src={filledLike} alt="likeImage" />
            <label>{likes}</label>
        </div>
        : <div className={css.button}>
            <img src={emptyLike} alt="likeImage" />
            <label>{likes}</label>
        </div>}
    </>
}