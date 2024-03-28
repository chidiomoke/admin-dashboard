import React from 'react'
import { Link } from 'react-router-dom'

const popularProductsData = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$1499.88',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Bud 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$1499.88',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.88',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.88',
        product_stock: 341
    },
    {
        id: '6324',
        product_name: 'Apple Magic Touch Pad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.88',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$459.88',
        product_stock: 453
    },
    {
        id: '4356',
        product_name: 'Nothing Earbuds Two',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$459.88',
        product_stock: 42
    },
]

const PopularProducts = () => {
    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
            <strong className='text-gray-700 font-medium'>Popular Products</strong>
            <div className='mt-4 flex flex-col gap-3'>
                {popularProductsData.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} className='flex justify-between items-center hover:no-underline'>
                        <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
                            <img className='w-full h-full' src={product.product_thumbnail} alt={product.product_name} />
                        </div>
                        <div className='flex-1 ml-4'>
                            <p className='text-sm text-gray-800'>{product.product_name}</p>
                            <span className={`text-sm font-medium ${product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'}`}>
                                {product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in stock'}
                            </span>
                        </div>
                        <div className='text-xs text-gray-400 pl-2'> {product.product_price}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularProducts
