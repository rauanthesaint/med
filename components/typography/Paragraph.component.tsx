import clsx from 'clsx'
import { IParagraphProps } from './Interfaces'
import styles from '@/components/typography/typography.module.scss'

export default function Paragraph({ children, className }: IParagraphProps) {
    return <p className={clsx(styles.Paragraph, className)}>{children}</p>
}
