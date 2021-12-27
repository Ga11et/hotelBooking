import { FC } from "react"
import css from './options.module.css'

type data = {image: string, name: string, describtion: string}

type props = {
    data: data[]
}

export const Options: FC<props> = ({ data }) => {
    return <section className={css.optionsContainer}>
        {data.map( el => <Item key={el.name} data={el} />)}
    </section>
}

type ItemProps = {
    data: data
}

const Item:FC<ItemProps> = ({ data }) => {
    return <div className={css.item}>
        <img src={data.image} alt="pic" />
        <div className={css.itemContent}>
            <h4>{data.name}</h4>
            <p>{data.describtion}</p>
        </div>
    </div>
}