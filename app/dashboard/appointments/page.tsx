import {
    Card,
    CardHeader,
    CardGroup,
    CardBody,
    CardFooter,
    Button,
} from 'tracey-ui'
import { Label, Paragraph } from 'tracey-ui'

import styles from './page.module.scss'
import { clinics } from '@/data/clinics'

export default function Page() {
    return (
        <main className={styles.Page}>
            <section>
                <Label size="md">Doctor&apos;s Appointments</Label>
            </section>
            <section>
                <CardGroup gap={18}>
                    {clinics.map((elem, index) => {
                        return (
                            <Card key={index} className={styles.Card}>
                                <CardHeader>
                                    <Label size="sm">{elem.title}</Label>
                                    <Label size="xs">{elem.type}</Label>
                                </CardHeader>
                                <CardBody>
                                    <Paragraph>{elem.address}</Paragraph>
                                    <Label size="xs">{elem.det__address}</Label>
                                    <Label size="xs">{elem.phone_number}</Label>
                                </CardBody>
                                <CardFooter>
                                    <Button variant="secondary" size="sm">
                                        Make an appointment
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </CardGroup>
            </section>
        </main>
    )
}
