import styles from '@/components/footer/footer.module.scss'
import { Container } from '..'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <Container className={styles.Container}>
                {/* <Label size="sm">
                    &copy;&nbsp;2023 Digital Healthcare Analyst. All rights
                    reserved
                </Label> */}
            </Container>
        </footer>
    )
}
