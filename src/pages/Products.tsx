import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Modal from "../components/Modal";
import { fetchProducts } from "@/data/ProductsData";
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
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    []
  );
  const addProductToCart = (product: Product, quantity: number) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Increment quantity of existing product
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      // Add new product to cart
      updatedCart.push({
        product,
        quantity,
      });
    }

    setCart(updatedCart);
  };

  const removeProduct = (id: number) => {
    setCart(cart.filter((item) => item.product.id !== id));
  };
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * Number(item.product.price),
      0
    );
  };

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchProductsData();
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
  console.log("cart data before passing to Layout:", cart);
  return (
    <Layout
      cart={cart}
      totalItems={getTotalItems()}
      totalPrice={getTotalPrice()}
      removeProduct={removeProduct}
    >
      <div className="container mx-auto py-8">
        <h1 className="text-3xl z-0 font-bold mb-4">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {products.map((product) => (
            <CardContainer
              key={product.id}
              className="  p-4 shadow-md relative "
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
                    ${product.price}
                  </CardItem>
                </div>

                {/* --for later reuse for product pages--
                <div className="">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-blue-500"
                  >
                  View Details
                  </Link>
                </div>
                */}
              </CardBody>
            </CardContainer>
          ))}
        </div>
        {selectedProduct && (
          <Modal
            cart={cart}
            product={selectedProduct}
            addProductToCart={addProductToCart}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </Layout>
  );
};

export default Products;
