import { FC } from "react";
import { ValueWithConditions } from "../../App";
import { LikeButton } from "../likebutton/likebutton";
import css from './comment.module.css'

export type commentDataType = {
    avatar: string
    name: string
    publication: Date
    likes: number
    isTouched: boolean
    message: string
}

type props = {
    data: commentDataType
}

export const Comment:FC<props> = ({ data }) => {

    const today = new Date()
    const publicationDate = ValueWithConditions(today.getDate() - data.publication.getDate(), ' день назад', ' дней назад', ' дня назад')

    return <section className={css.commentContainer}>
        <img src={data.avatar} alt='avatar' />
        <div className={css.authorContainer}>
            <label>{data.name}</label>
            <p>{publicationDate}</p>
        </div>
        <div className={css.likeContainer}>
            <LikeButton likes={data.likes} isTouched={data.isTouched} />
        </div>
        <div className={css.messageContainer}>
            <p>{data.message}</p>
        </div>
    </section>

}