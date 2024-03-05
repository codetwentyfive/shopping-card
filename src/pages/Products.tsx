import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Modal from "../components/Modal";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Product {
  id: number;
  name: string;
  description: string;
  size?: string;
  price: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 0));
        const mockProducts: Product[] = [
          {
            id: 1,
            name: "Tea Pot",
            description:
              "Beautiful Mongolian Tea Pot made from ancient magical copper and zinc",
            price: "$50",
            image:
              "https://cdn.orientalartauctions.com/1ebc4537-a8c2-6d94-9f0c-0242ac1a0007/85629__w_2000.jpg",
          },
          {
            id: 2,
            name: "Fishing Boots",
            description:
              "Magical Fishing Boots guaranteed head tuner and success magnet",
            size: "L",
            price: "$250",
            image:
              "https://www.mongolianz.com/wp-content/uploads/2020/03/32-ugalztai-320-1-scaled.jpg",
          },
          {
            id: 3,
            name: "Deel",
            description: "Brilliant silk Deel ",
            size: "S",
            price: "$9999",
            image:
              "https://www.mongolianz.com/wp-content/uploads/2021/01/138695842_482257773118595_8150043691993830142_n-510x765.jpg",
          },
          {
            id: 4,
            name: "Deel",
            description: "Sable Fur & Cashmere Deel ",
            size: "XL",
            price: "$9999",
            image:
              "https://www.mongolianz.com/wp-content/uploads/2023/04/Mens-jacket-510x631.jpg",
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

  const MAX_DESCRIPTION_LENGTH = 100; // Maximum number of characters for description

  const truncateDescription = (description: string) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      const truncatedText = description.substring(0, MAX_DESCRIPTION_LENGTH);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");
      return `${truncatedText.substring(0, lastSpaceIndex)} ...`;
    }
    return description;
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
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
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
          {products.map((product) => (
            <CardContainer
              key={product.id}
              className="  p-4 shadow-md relative inter-var"
            >
              <CardBody className="">
                <CardItem translateZ="50" className="font-bold  ">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                </CardItem>
                <img
                  src={product.image}
                  className=" max-h-100 w-auto mb-4 object-cover cursor-pointer"
                  onClick={() => handleProductClick(product)}
                  alt={product.name} 
                />
                <CardItem translateZ="60">
                  <p className=" text-xs overflow-hidden h-10">
                    {truncateDescription(product.description)}
                  </p>
                </CardItem>
                <div className="flex items-center justify-between">
                  <CardItem translateZ="30" className="text-gray-700">
                    {product.size && `Size: ${product.size}`}
                  </CardItem>
                  <CardItem translateZ="40" className="">
                    {product.price}
                  </CardItem>
                </div>
                <div className="">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-blue-500"
                  >
                    View Details
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
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
