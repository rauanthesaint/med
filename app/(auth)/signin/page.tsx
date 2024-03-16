'use client'
import { Lock, Mail, NavArrowRight } from 'iconoir-react'
import { useState } from 'react'
import styles from './page.module.scss'

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
            sign in page
            {/* <Section>
                <Container>
                    <form action="">
                        <Label size="lg">Sign in to Med</Label>
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
// https://github.com/rauanthesaint/med.git
