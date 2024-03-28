import React from 'react'
// import { Link } from 'react-router-dom'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyProfileChart from './BuyProfileChart'
import ReceiveOrders from './ReceiveOrders'
import PopularProducts from './PopularProducts'

const Dashboard = () => {
    return (
        <div className='flex flex-col px-2 gap-4'>
            <DashboardStatsGrid />
            <div className='flex gap-4 flex-1 w-full'>
                <TransactionChart />
                <BuyProfileChart />
            </div>
            <div className='flex flex-row gap-4 flex-1 w-full'>
                <ReceiveOrders />
                <PopularProducts />
            </div>
        </div>
    )
}

export default Dashboard
