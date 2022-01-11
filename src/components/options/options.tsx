import { FC } from "react"
import css from './options.module.css'

export type roomInfoDataType = {image: string, title: string, description: string}

type props = {
    data: roomInfoDataType[]
    title: string
}

export const Options: FC<props> = ({ data, title }) => {
    return <section className={css.optionsContainer}>
        <h2>{title}</h2>
        {data.map( el => <Item key={el.title} data={el} className={el.title === data[data.length - 1].title ? css.last : ''} />)}
    </section>
}

type ItemProps = {
    data: roomInfoDataType
    className: string
}

const Item:FC<ItemProps> = ({ data, className }) => {
    return <div className={css.item + ' ' + className} >
        <img src={data.image} alt="pic" />
        <div className={css.itemContent}>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </div>
    </div>
}