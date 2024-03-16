import { Label, Paragraph } from 'tracey-ui'
import {
    Card,
    CardGroup,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from 'tracey-ui'

import styles from './page.module.scss'

export default function Page() {
    return (
        <main className={styles.Page}>
            <section>
                <Label size="md">Check Up</Label>
            </section>
            <section>
                <CardGroup>
                    <Card>
                        <CardHeader>
                            <Label size="sm">Check UP Name</Label>
                        </CardHeader>
                        <CardBody>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit eligendi repudiandae
                                doloremque pariatur illo dolore recusandae
                                laboriosam rem necessitatibus doloribus, officia
                                eos tempora aut aliquam placeat dolorum eius
                                possimus harum.
                            </Paragraph>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" style={{ width: '100%' }}>
                                More
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Label size="sm">Check UP Name</Label>
                        </CardHeader>
                        <CardBody>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit eligendi repudiandae
                                doloremque pariatur illo dolore recusandae
                                laboriosam rem necessitatibus doloribus, officia
                                eos tempora aut aliquam placeat dolorum eius
                                possimus harum.
                            </Paragraph>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" style={{ width: '100%' }}>
                                More
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Label size="sm">Check UP Name</Label>
                        </CardHeader>
                        <CardBody>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit eligendi repudiandae
                                doloremque pariatur illo dolore recusandae
                                laboriosam rem necessitatibus doloribus, officia
                                eos tempora aut aliquam placeat dolorum eius
                                possimus harum.
                            </Paragraph>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" style={{ width: '100%' }}>
                                More
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Label size="sm">Check UP Name</Label>
                        </CardHeader>
                        <CardBody>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit eligendi repudiandae
                                doloremque pariatur illo dolore recusandae
                                laboriosam rem necessitatibus doloribus, officia
                                eos tempora aut aliquam placeat dolorum eius
                                possimus harum.
                            </Paragraph>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" style={{ width: '100%' }}>
                                More
                            </Button>
                        </CardFooter>
                    </Card>
                </CardGroup>
            </section>
        </main>
    )
}
