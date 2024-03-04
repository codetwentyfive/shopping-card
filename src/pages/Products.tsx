import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Modal from "./Modal";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("name"); // Default sorting by name

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 0));
        const mockProducts = [
          {
            id: 1,
            name: "Tea Pot",
            description:
              "Beautiful Mongolian Tea Pot made from ancient magic rock",
            price: "$50",
            image: "image1.jpg",
          },
          {
            id: 2,
            name: "Fishing Boots",
            description:
              "Magical Fishing Boots guaranteed head tuner and success magnet",
            size: "L",
            price: "$250",
            image: "image2.jpg",
          },
          {
            id: 3,
            name: "Deel",
            description: "Brilliant silk Deel ",
            size: "XL",
            price: "$9999",
            image: "image3.jpg",
          },
        ];
        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const MAX_DESCRIPTION_LENGTH = 55; // Maximum number of characters for description

  const truncateDescription = (description) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      const truncatedText = description.substring(0, MAX_DESCRIPTION_LENGTH);
      const lastSpaceIndex = truncatedText.lastIndexOf(' ');
      return `${truncatedText.substring(0, lastSpaceIndex)} ...`;
    }
    return description;
  };

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchQuery]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const sortProducts = (a: any, b: any) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "size") {
      return a.size.localeCompare(b.size);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className=" p-4 shadow-md relative">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <img
                src={product.image}
                className="w-full h-auto mb-4"
                onClick={() => handleProductClick(product)}
              />
              <p className="text-gray-600 text-xs overflow-hidden h-20 mb-2">
                {truncateDescription(product.description)}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-gray-700">
                  {product.size && `Size: ${product.size}`}
                </p>
                <div className="">{product.price}</div>
              </div>
              <div className="">
                <Link to={`/products/${product.id}`} className="text-blue-500">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <Modal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>
    </Layout>
  );
};

export default Products;
