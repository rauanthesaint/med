import clsx from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import styles from '@/components/card/card.module.scss'

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({ children, className, id }: ICardProps) {
    return (
        <article className={clsx(className, styles.Card)} id={id}>
            {children}
        </article>
    )
}

export function CardHeader({ children }: { children: ReactNode }) {
    return <header className={styles.Card__Header}>{children}</header>
}
export function CardBody({ children }: { children: ReactNode }) {
    return <div className={styles.Card__Body}>{children}</div>
}
