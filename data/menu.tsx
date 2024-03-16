import { GraphUp, Hospital, MacOsWindow, TaskList, Page } from 'iconoir-react'

type menuItem = {
    title: string
    link: string
    icon: React.JSX.Element
}

export const menu: menuItem[] = [
    {
        title: 'Check-Ups',
        icon: <TaskList />,
        link: '/dashboard/checkups',
    },
    {
        title: "Doctor's Appointment",
        icon: <Hospital />,
        link: '/dashboard/appointments',
    },
    {
        title: 'Appointment records',
        icon: <Page />,
        link: '/dashboard/records',
    },
    {
        title: 'Analysis',
        icon: <GraphUp />,
        link: '/dashboard/analysis',
    },
    {
        title: 'Monitoring',
        icon: <MacOsWindow />,
        link: '/dashboard/monitoring',
    },
]
