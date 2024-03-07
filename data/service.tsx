import { GraphUp, HeadsetHelp, Shield, TestTube } from 'iconoir-react'
import { ReactNode } from 'react'

export type Service = {
    icon: ReactNode
    title: JSX.Element
    description: JSX.Element
}

export const services: Service[] = [
    {
        icon: <GraphUp />,
        title: <>Real-time analytics</>,
        description: (
            <>
                Gain access to&nbsp;up-to-the-minute insights, enabling
                healthcare professionals to&nbsp;make informed decisions
                promptly.
            </>
        ),
    },
    {
        icon: <HeadsetHelp />,
        title: <>Security &amp;&nbsp;Compliance</>,
        description: (
            <>
                Provide clinicians with real-time recommendations and
                evidence-based guidelines, enhancing the quality of&nbsp;patient
                care.
            </>
        ),
    },
    {
        icon: <Shield />,
        title: <>Security &amp;&nbsp;Compliance</>,
        description: (
            <>
                Ensure the highest level of&nbsp;data security and compliance
                with industry regulations, such as&nbsp;HIPAA, to&nbsp;protect
                patient information.
            </>
        ),
    },
    {
        icon: <TestTube />,
        title: <>Research &amp;&nbsp;Clinical Trials</>,
        description: (
            <>
                Facilitate research initiatives by providing access to a rich
                source of anonymized healthcare data for clinical trials and
                studies.
            </>
        ),
    },
]
