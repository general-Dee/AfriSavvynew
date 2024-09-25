// import React from 'react'
// import Product from './Product'

import React, { useState, useEffect } from 'react';
import Product from './Product'; // assuming Product is your child component

const ProductFeed = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from your API
        const fetchProducts = async () => {
            const res = await fetch('https://dummyjson.com/products'); // replace with your data source
            const data = await res.json();
            
            // Check if data.products exists and is an array
            if (Array.isArray(data.products)) {
                setProducts(data.products);
            } else {
                console.error('Products data is not an array:', data);
                setProducts([]);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products...</h1>
            {products.length > 0 ? (
                products.map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductFeed;



// const ProductFeed = ({ products }) => {
//   return (
//     <div>
//         <h1>Products...</h1>
//         {products.map(({id, title, price, description , category, image}) => (
//             <Product 
//                 key={id}
//                 id={id}
//                 title={title}
//                 description={description}
//                 price={price}
//                 category={category}
//                 image={image}
//             />
//         ))}
//     </div>
//   )
// }

// export default ProductFeed