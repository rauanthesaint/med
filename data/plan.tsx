export type Plan = {
    type: string
    price?: string
    list: string[]
}

export const plan: Plan[] = [
    {
        type: 'Starter',
        list: [
            'Data Aggregation and Integration',
            'Real-Time Analytics',
            'Mobile Access',
            'Data Security and Compliance',
            '24/7 Customer Support',
        ],
    },
    {
        type: 'Pro',
        price: '10',
        list: [
            'Data Aggregation and Integration',
            'Real-Time Analytics',
            'Mobile Access',
            'Data Security and Compliance',
            '24/7 Customer Support',
        ],
    },
    {
        type: 'Enterprise',
        price: '30',
        list: [
            'Data Aggregation and Integration',
            'Real-Time Analytics',
            'Mobile Access',
            'Data Security and Compliance',
            '24/7 Customer Support',
        ],
    },
]
