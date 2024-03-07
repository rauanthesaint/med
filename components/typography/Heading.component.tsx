import styles from '@/components/typography/typography.module.scss'
import { IHeadingProps } from './Interfaces'
import clsx from 'clsx'

export default function Heading({ children, className }: IHeadingProps) {
    return <h2 className={clsx(styles.Heading, className)}>{children}</h2>
}
