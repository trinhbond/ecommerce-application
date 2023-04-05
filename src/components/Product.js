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
        <div className='product'>
            <div className='image'>
                <img 
                    key={product.img} 
                    src={product.img || null}
                    alt={product.name}
                    width={200}
                />
            </div>
            <h1>
                {product.name ? <>{product.name}</> : <>N&#47;A</>}
                <span>
                    {product.price ? <>{product.price} </> : <>N&#47;A</>}
                </span>
            </h1>
            <span>
                {product.size ? <>{product.size}</> : <>N&#47;A</>}
            </span>
            <p>
                {product.description ? <>{product.description}</> : <>N&#47;A</>}
            </p>
        </div>
    )
}