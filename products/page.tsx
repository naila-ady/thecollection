// import React from 'react';
// import { client } from "../../../sanity-migration/dist/sanityClient";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   discountPercentage: number;
//   tags: string[];
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   // image:string;
//   description: string;
//   rating: number;
//   ratingCount: number;
// }

// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] {
//     _id,
//     name,
//     price,
//     discountPercentage,
//     tags,
//     "imageUrl": image.asset->url,
//     description,
//     rating,
//     ratingCount
//   }`;
//   return client.fetch(query);
// }

// const ProductsPage = async () => {
//   const products = await fetchProducts();

//   return (
//     <div>
//       <h1>Products</h1>
//       <div style={{  }}>
//         {products.map((product) => (
//           <div key={product._id} style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
//             <h2>{product.name}</h2>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               style={{ width: '100%', height: 'auto' }}
//             />
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             {product.discountPercentage > 0 && (
//               <p>Discount: {product.discountPercentage}%</p>
//             )}
//             <p>Rating: {product.rating} ({product.ratingCount} reviews)</p>
//             {product.tags.length > 0 && <p>Tags: {product.tags.join(', ')}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// const styles = {
//   productGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Grid that adjusts based on available width
//     gap: '20px',
//     padding: '20px',
//   },
//   productCard: {
//     border: '1px solid #ccc',
//     padding: '20px',
//     backgroundColor: '#fff',
//     textAlign: 'center',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease-in-out',
//   },
//   productImage: {
//     width: '100%',
//     height: 'auto',
//     marginBottom: '10px',
//   },
//   '@media (max-width: 600px)': {
//     productGrid: {
//       gridTemplateColumns: '1fr', // One column for small screens
//     },
//   },
// };


// export default ProductsPage;

import React from 'react';
import { client } from "../../../sanity-migration/dist/sanityClient";
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';



interface Product {
  _id: string; // Unique identifier for the product
  name: string; // Product Name
  description: string; // Product description
  price: number; // Product price
  discountPercentage: number; // Discount percentage on the product
  priceWithoutDiscount: number; // Original price before discount
  rating: number; // Rating value of the product (e.g., 4.5)
  ratingCount: number; // Number of reviews/ratings for the product
  tags: string[]; // Tags associated with the product (e.g., "new arrival", "bestseller")
  sizes: string[]; // Available sizes for the product (e.g., ["S", "M", "L"])
  image: {
    asset: {
      _ref: string; // Reference to the image asset in Sanity
    };
  };
}


async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    name,
    price,
        tags,
    image,
    description,
    discountPercentage,
    priceWithoutDiscount,
    rating,
      ratingCount,
      sizes, 
    
  }`;
  return client.fetch(query);
}

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div className="p-6">
      <h1 className="text-6xl font-bold mb-6 text-[#155915]">The Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 bg-white shadow-md rounded-lg border-[#D32F2F]">
            <h2 className="text-xl font-semibold mb-2 text-[#155915]">{product.name}</h2>
                        <Image
                                src={urlFor(product.image).url()}
                                alt={product.name}
                                width={500}
                                height={500}
                                style={{ width: '100%', height: 'auto' }}
                            />
            <p className="font-semibold text-lg text-[#125012]">Price: ${product.price}</p>
            <p className="text-[#125012] mb-2">{product.description}</p>
            <p className="text-[#125012] mb-2">{product.priceWithoutDiscount}</p>
            {product.tags.length > 0 && <p className="text-gray-500">Tags: {product.tags.join(', ')}</p>}

            <p className="text-[#125012] mb-2">{product.sizes}</p>
            <p className="text-[#125012]">Rating: {product.rating} ({product.ratingCount} reviews)</p>
            <p className="text-[#125012] mb-2">Rating Counts{product.ratingCount}</p>

            {product.sizes && product.sizes.length > 0 && (
              <p className="text-[#125012]">Available Sizes: {product.sizes.join(', ')}</p>
            )}
    
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
