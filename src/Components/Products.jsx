import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <p>This is the Product page  </p>
            <Link to='/' className='underline text-neutral-700'>Take me to the dashboard</Link>
        </div>
    )
}

export default Products
