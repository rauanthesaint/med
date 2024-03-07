// === Import deps ===
/* Built-in Module Components */
import Image from 'next/image'
/* Components */
import Container from '../container/Container.component'
import { Button } from '..'
/* Static */
import styles from '@/components/header/header.module.scss'
import Logo from '@/public/static/img/Logo.svg'
import { HTMLAttributes } from 'react'

// === Component Defintion ===
export default function Header({ children }: HTMLAttributes<HTMLDivElement>) {
    return (
        <header className={styles.Header}>
            <Container className={styles.Container}>{children}</Container>
        </header>
    )
}
