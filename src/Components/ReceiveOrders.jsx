import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from './lib/utils/get_order_status'

const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05017183:24:00',
        order_total: '$455.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, DR 97424'
    },
    {
        id: '7',
        product_id: '4324',
        customer_id: '96453',
        customer_name: 'Ryan Caroll',
        order_date: '2022-05017183:24:00',
        order_total: '$455.50',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '2',
        product_id: '4324',
        customer_id: '65345',
        customer_name: 'Masson Nash',
        order_date: '2022-05017183:24:00',
        order_total: '$455.50',
        current_order_status: 'SHIPPED',
        shipment_address: 'Westminster, CA 92683'
    },
    {
        id: '3',
        product_id: '4324',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '2022-05017183:24:00',
        order_total: '$455.50',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Cottage Grove, DR 97424'
    },
    {
        id: '4',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05017183:24:00',
        order_total: '$455.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, DR 97424'
    },
    {
        id: '5',
        product_id: '4324',
        customer_id: '24453',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05017183:24:00',
        order_total: '$455.50',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'Cottage Grove, DR 97424'
    },
    {
        id: '6',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05017183:24:00',
        order_total: '$455.50',
        current_order_status: 'DELIVERED',
        shipment_address: 'San Mateo, CA 94403'
    }
]

const ReceiveOrders = () => {
    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <strong className='text-gray-700 font-medium'>Recent Orders</strong>
            <div className='mt-3'>
                <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Product ID</td>
                            <td>Customer Name</td>
                            <td>Order Date</td>
                            <td>Order Total</td>
                            <td>Shipping Address</td>
                            <td>Order Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td>#{order.id}</td>
                                <td><Link to={`product/${order.product_id}`}>{order.product_id}</Link></td>
                                <td><Link to={`/customer/${order.customer_name}`}>{order.customer_name}</Link></td>
                                <td> {new Date(order.order_date).toLocaleDateString()}</td>
                                <td>{order.order_total}</td>
                                <td>{order.shipment_address}</td>
                                <td>{getOrderStatus(order.current_order_status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    )
}

export default ReceiveOrders
