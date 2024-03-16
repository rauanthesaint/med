import { ReactNode } from 'react'
import styles from './layout.module.scss'

import { Header, Menu } from '@/components'

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.Layout}>
            <Header />
            <div className={styles.Layout__Content}>
                <Menu />
                {children}
            </div>
        </div>
    )
}

export default Layout
