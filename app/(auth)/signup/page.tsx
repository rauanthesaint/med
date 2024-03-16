'use client'

import { useEffect, useState } from 'react'

import { Section, Container } from '@/components'
import styles from './page.module.scss'
import { Lock, Mail, NavArrowRight } from 'iconoir-react'

export default function Page() {
    const [validEmail, isValidEmail] = useState<boolean>(false)
    const [validPassword, isValidPassword] = useState<boolean>(false)

    const handleEmail = (value: boolean) => {
        isValidEmail(value)
    }
    const handlePassword = (value: boolean) => {
        isValidPassword(value)
    }

    return (
        <main className={styles.Page}>
            sign up page
            {/* <Section id={styles.Account__Settings} className={styles.Section}>
                <Container>
                    <form action="">
                        <section>
                            <Label size="lg">Account Settings</Label>
                            <div>
                                <TextField
                                    placeholder="example@gmail.com"
                                    leading={<Mail />}
                                    label="Email"
                                    isValid={handleEmail}
                                    rules={{
                                        pattern: {
                                            value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                            message: 'Invalid Email',
                                        },
                                        required: {
                                            message: 'The field is required',
                                        },
                                    }}
                                />
                                <TextField
                                    leading={<Lock />}
                                    label="Password"
                                    type="password"
                                    isValid={handlePassword}
                                    rules={{
                                        minLength: {
                                            value: 8,
                                            message:
                                                'The password must contain at least one lowercase, uppercase, digits cannot be shorter than 8 characters',
                                        },
                                        required: {
                                            message: 'The field is required',
                                        },
                                        pattern: {
                                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/,
                                            message:
                                                'The password must contain at least one lowercase, uppercase, digits cannot be shorter than 8 characters',
                                        },
                                    }}
                                />
                            </div>
                        </section>

                        <section>
                            <Label size="lg">Personal Data</Label>
                            <div>
                                <TextField
                                    label="Name"
                                    placeholder="John Doe"
                                />
                                <TextField
                                    label="Date of birth"
                                    type="date"
                                    id="dob"
                                />
                            </div>
                        </section>

                        <Button
                            type="button"
                            disabled={!(validEmail && validPassword)}
                        >
                            Next
                            <NavArrowRight />
                        </Button>
                    </form>
                </Container>
            </Section> */}
        </main>
    )
}
