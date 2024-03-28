import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
        name: 'Jan',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1398
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Apr',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'May',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Jun',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'Jul',
        Expense: 3490,
        Income: 4300
    },
    {
        name: 'Aug',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Sep',
        Expense: 2550,
        Income: 6800
    },
    {
        name: 'Oct',
        Expense: 3400,
        Income: 8800
    },
    {
        name: 'Nov',
        Expense: 3300,
        Income: 6200
    },
    {
        name: 'Dec',
        Expense: 5400,
        Income: 8000
    }
]

const TransactionChart = () => {
    return (
        <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
            <strong className='text-gray-700 font-medium'>Transactions</strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Income" fill="#8884d8" />
                        <Bar dataKey="Expense" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransactionChart
