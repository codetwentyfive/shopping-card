import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockProducts = [
          { id: 1, name: 'Product 1', description: 'Description for Product 1' },
          { id: 2, name: 'Product 2', description: 'Description for Product 2' },
          { id: 3, name: 'Product 3', description: 'Description for Product 3' },
        ];
        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <Link to={`/products/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
