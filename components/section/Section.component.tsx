import clsx from 'clsx'
import styles from '@/components/section/section.module.scss'
import { ReactNode } from 'react'

export default function Section({
    className,
    children,
    id,
}: {
    children: ReactNode
    className?: string
    id?: string
}) {
    return (
        <section id={id} className={clsx(className, styles.Section)}>
            {children}
        </section>
    )
}
