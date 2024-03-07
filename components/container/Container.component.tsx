// === Importing deps ===
import styles from '@/components/container/container.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'
// === Component definition
export default function Container({
    className,
    children,
    id,
}: {
    children: ReactNode
    className?: string
    id?: string
}) {
    return (
        <div id={id} className={clsx(className, styles.Container)}>
            {children}
        </div>
    )
}
