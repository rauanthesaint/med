'use client'

import { menu } from '@/data/menu'
import styles from './menu.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Label } from 'tracey-ui'
import clsx from 'clsx'

export default function Menu() {
    const pathName = usePathname()
    return (
        <aside className={styles.Menu}>
            <section className={styles.Menu__List}>
                {menu.map((elem, index) => {
                    return (
                        <Link
                            className={clsx(
                                styles.Menu__Item,
                                pathName === elem.link &&
                                    styles.Menu__Item__active
                            )}
                            href={elem.link}
                            key={index}
                        >
                            {elem.icon}
                            {elem.title}
                        </Link>
                    )
                })}
            </section>

            <section className={styles.Menu__Label}>
                <Label size="xs">Logo &copy; Med 2024</Label>
            </section>
        </aside>
    )
}
