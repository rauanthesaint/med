import { Heading, Label, Paragraph } from 'tracey-ui'
import styles from './page.module.scss'

function Page() {
    return (
        <main className={styles.Page}>
            <section>
                <Heading>
                    Welcome back,
                    <br />
                    Jane👋
                </Heading>
            </section>
            <section>
                <Label className={styles.sticky} size="lg">
                    Check-Ups
                </Label>
            </section>
            <section>
                <Label size="lg">Appointments</Label>
            </section>
            <section>
                <Label size="lg">Appointment Records</Label>
            </section>
            <section>
                <Label size="lg">Analysis</Label>
            </section>
            <section>
                <Label size="lg">Monitoring</Label>
            </section>
        </main>
    )
}

export default Page
