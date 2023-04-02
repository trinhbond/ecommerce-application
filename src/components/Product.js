import React from 'react'
import '../scss/product.scss'

export default function Product() {
    const product = {
        name: 'Product',
        price: '$20.00',
        img: '/product.jpg',
        size: 'Large',
        description: 'Description of product',
    };

    return (
        <div className='product-wrapper'>
            <div className='product'>
                <div className='image'>
                    <img 
                        key={product.img} 
                        src={product.img || null}
                        alt={product.name}
                        width={250}
                    />
                </div>
                <h1>
                    {product.name ? <>{product.name}</> : <>N/A</>}
                </h1>
                <span>
                    {product.price ? <>{product.price} </> : <>N/A</>}
                </span>
                <span>
                    {product.size ? <>{product.size}</> : <>N/A</>}
                </span>
                <p>
                    {product.description ? <>{product.description}</> : <>N/A</>}
                </p>
            </div>
        </div>
    )
}