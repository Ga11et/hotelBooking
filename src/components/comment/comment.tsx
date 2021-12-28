import { FC } from "react";
import { LikeButton } from "../likebutton/likebutton";
import css from './comment.module.css'

export type data = {
    avatar: string
    name: string
    publication: Date
    likes: number
    isTouched: boolean
    message: string
}

type props = {
    data: data
}

export const Comment:FC<props> = ({ data }) => {

    const ModOneCondition = (value: number) => {
        return value % 10 === 1 && (value > 20 || value < 10)
    }
    const ValueCondition = (value: number) => {
        return value % 10 > 4 || value % 10 === 0 || (value < 20 && value > 10)
    } 
    const ValueWithConditions = (value: number, optionOne: string, optionsTwo: string, optionThree: string) => {
        return value.toString() + (ModOneCondition(value) ? optionOne : (ValueCondition(value) ? optionsTwo : optionThree))
    }

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