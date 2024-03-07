import styles from '@/components/typography/typography.module.scss'
import { ILabelProps } from './Interfaces'
import clsx from 'clsx'

export default function Label({
    children,
    size = 'md',
    className,
}: ILabelProps) {
    return (
        <span className={clsx(styles.Label, styles[size], className)}>
            {children}
        </span>
    )
}
