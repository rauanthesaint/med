'use client'
import {
    Container,
    Section,
    Button,
    Card,
    CardHeader,
    CardBody,
    TextField,
} from '@/components'
import { Paragraph, Display, Heading, Label } from '@/components/typography'

import styles from '@/app/page.module.scss'
import { services } from '@/data/service'
import { plan } from '@/data/plan'
import { Check, Mail } from 'iconoir-react'
import { useState } from 'react'

export default function Page() {
    const [valid, isValid] = useState<boolean>(false)

    const handleForm = (value: boolean) => {
        isValid(value)
    }

    return (
        <main>
            <Section id={styles.banner}>
                <Container className={styles.Flex__Container}>
                    <Display>
                        Take Care of&nbsp;
                        <span className={styles.highlight}>Your</span> Health
                        Here
                    </Display>
                    <Paragraph>
                        We&nbsp;make it&nbsp;easier than ever to&nbsp;understand
                        your doctor
                    </Paragraph>
                    <Button className={styles.Button}>Get Started</Button>
                </Container>
            </Section>

            <Section>
                <Container className={styles.Flex__Container}>
                    <Heading>About Us</Heading>
                    <Paragraph>
                        In&nbsp;today&rsquo;s rapidly evolving healthcare
                        landscape, data has become the cornerstone
                        of&nbsp;informed decision-making, patient care, and
                        system efficiency.
                    </Paragraph>
                    <Paragraph>
                        Our Digital Healthcare Analyst System
                        is&nbsp;at&nbsp;the forefront of&nbsp;this revolution,
                        providing healthcare professionals with the tools they
                        need to&nbsp;harness the full potential of&nbsp;digital
                        data.
                    </Paragraph>
                    <Paragraph>
                        Our Digital Healthcare Analyst System
                        is&nbsp;a&nbsp;comprehensive platform that seamlessly
                        integrates with your existing healthcare infrastructure.
                        It&nbsp;empowers you&nbsp;to:
                    </Paragraph>
                </Container>
            </Section>

            <Section>
                <Container className={styles.Flex__Container}>
                    <div className={styles.Card__Container}>
                        {services.map((elem, index) => {
                            return (
                                <Card key={index}>
                                    <CardHeader>
                                        <div className={styles.card__icon}>
                                            {elem.icon}
                                        </div>
                                        <Label size="lg">{elem.title}</Label>
                                    </CardHeader>
                                    <Paragraph>
                                        Gain access to&nbsp;up-to-the-minute
                                        insights, enabling healthcare
                                        professionals to&nbsp;make informed
                                        decisions promptly.
                                    </Paragraph>
                                </Card>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className={styles.Flex__Container}>
                    <Display>
                        Embark on&nbsp;Healthcare{' '}
                        <span className={styles.highlight}>Data Journey</span>{' '}
                        Today!
                    </Display>
                    <Paragraph>
                        It&rsquo;s time to&nbsp;start your journey towards
                        a&nbsp;healthier future
                    </Paragraph>
                    <Button className={styles.Button}>Get Started</Button>
                </Container>
            </Section>

            <Section>
                <Container className={styles.Flex__Container}>
                    <div className={styles.Card__Container}>
                        {plan.map((elem, index) => {
                            return (
                                <Card key={index}>
                                    <CardHeader>
                                        <Label>{elem.type}</Label>
                                    </CardHeader>
                                    <CardBody>
                                        <Heading>
                                            {elem.price ? (
                                                <span>{elem.price}/mo</span>
                                            ) : (
                                                'Free'
                                            )}
                                        </Heading>
                                        <Button size="sm">Select plan</Button>
                                        <ul className={styles.list}>
                                            {elem.list.map((item, id) => {
                                                return (
                                                    <li key={id}>
                                                        <Check />
                                                        {item}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </CardBody>
                                </Card>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container
                    id={styles.Section__Contacts}
                    className={styles.Flex__Container}
                >
                    <Heading>Contact Us</Heading>

                    <form className="" action="#">
                        <TextField
                            sizing="sm"
                            leading={<Mail />}
                            label={'Email'}
                            isValid={handleForm}
                            rules={{
                                required: { message: 'Field is Required' },
                                pattern: {
                                    value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                    message: 'Invalid Email',
                                },
                            }}
                        />
                        <Button
                            disabled={!valid}
                            genre="primary"
                            size="sm"
                            className={styles.Button}
                        >
                            Hello
                        </Button>
                    </form>
                </Container>
            </Section>
        </main>
    )
}
