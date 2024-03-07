import clsx from 'clsx'
import { IDisplayProps } from './Interfaces'
import styles from '@/components/typography/typography.module.scss'

export default function Display({ children, className }: IDisplayProps) {
    return <h1 className={clsx(styles.Display, className)}>{children}</h1>
}
