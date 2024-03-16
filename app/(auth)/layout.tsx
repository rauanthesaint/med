'use client'
import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/static/img/Logo.svg'
import { Header } from '@/components'

import { usePathname } from 'next/navigation'

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    const pathName = usePathname()
    return (
        <div>
            {/* <Header>
                <Image alt="Logo of The Company" src={Logo} />
                <Button genre="secondary" size="sm">
                    <Link href={pathName === '/signin' ? '/signup' : '/signin'}>
                        {pathName === 'signin' ? 'Sign Up' : 'Sign In'}
                    </Link>
                </Button>
            </Header> */}
            {children}
        </div>
    )
}
