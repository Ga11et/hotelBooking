import { FC } from "react";
import css from './bulletlist.module.css'

type props = {
    title: string,
    data: string[]
}

export const BulletList: FC<props> = ({ title, data }) => {
    return <section className={css.bulletListContainer}>
        <h2>{title}</h2>
        <ul className={css.bullets}>
            {data.map( el => <Bullet key={el} data={el} />)}
        </ul>
    </section>
}

type BulletProps = {
    data: string
}

const Bullet: FC<BulletProps> = ({ data }) => {
    return <li className={css.bullet}>
        {data}
    </li>
}