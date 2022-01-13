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
        <svg viewBox="0 0 12 12" width={12} height={12}>
            <circle 
                r={5}
                cx={6}
                cy={6}
                stroke="none"
                fill="var(--grey-25)"
            />
        </svg>
        {data}
    </li>
}