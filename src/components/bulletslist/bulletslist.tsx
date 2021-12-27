import { FC } from "react";
import css from './bulletlist.module.css'

type props = {
    name: string,
    data: string[]
}

export const BulletList: FC<props> = ({ name, data }) => {
    return <section className={css.bulletListContainer}>
        <h3>{name}</h3>
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