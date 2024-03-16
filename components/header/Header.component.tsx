'use client'
// === Import deps ===
/* Static */
import styles from '@/components/header/header.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { BellNotification, Menu } from 'iconoir-react'
import { useState } from 'react'

import { Button } from 'tracey-ui'
import { Label } from 'tracey-ui'

import { navigation } from '@/data/navigation'

// === Component Defintion ===
export default function Header() {
    const [active, isActive] = useState<boolean>(false)

    const handlerMenu = () => {
        isActive(!active)
    }
    return (
        <header className={styles.Header}>
            <div className={clsx(styles.Header__Section, styles.Header__Label)}>
                {/* Logo */}
                <span className={styles.Logo}>Logo</span>
                {/* User */}
                <Link href={'/dashboard'}>Jane&apos;s dashboard</Link>
            </div>

            <div
                className={clsx(
                    styles.Header__Section,
                    styles.Header__Navigation
                )}
            >
                {/* Navigation */}
                <nav
                    className={clsx(
                        styles.Header__Section__Block,
                        styles.Header__Navigation__Links,
                        active && styles.Header__Navigation__Links__Active
                    )}
                >
                    <Label className={styles.Header__Navigation__Category}>
                        Navigation
                    </Label>
                    {navigation.map((elem, index) => {
                        return (
                            <Link
                                key={index}
                                className={styles.Header__Navigation__Link}
                                href={elem.link}
                            >
                                {elem.title}
                            </Link>
                        )
                    })}
                </nav>
                {/* Menu */}
                <div className={styles.Header__Section__Block}>
                    <Button
                        title="Notifications Dropdown"
                        shape="icon"
                        size="sm"
                        variant="secondary"
                    >
                        <BellNotification />
                    </Button>
                    <Button
                        className={styles.Button__Profile}
                        title="Profile Dropdown"
                        shape="icon"
                        size="sm"
                        variant="tertiary"
                    >
                        <span className={styles.User__Default__Avatar} />
                    </Button>
                    <Button
                        className={styles.Button__Menu}
                        title="Menu"
                        shape="icon"
                        size="sm"
                        variant="secondary"
                        onClick={handlerMenu}
                    >
                        <Menu />
                    </Button>
                </div>
            </div>
        </header>
    )
}
