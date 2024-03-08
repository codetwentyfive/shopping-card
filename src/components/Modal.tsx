import React, { useState } from "react";
interface Product {
  id: number;
  name: string;
  description: string;
  size?: string;
  price: string;
  image: string;
}
interface ModalProps {
  product: {
    id:number;
    image: string;
    name: string;
    description: string;
    price: string;
  };
  cart: { product: Product; quantity: number }[];

  onClose: () => void;
  addProductToCart: (product:Product, quantity: number) => void;
}

const Modal: React.FC<ModalProps> = ({
  product,
  onClose,
  addProductToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    console.log("HEEREEE",product)
    addProductToCart(product, quantity); // Add product and quantity to the cart
    onClose(); // Close the modal after adding the product to the cart
  };

  return (
    <div
      className="text-black fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-8 rounded-md w-full md:max-w-md">
        <button className="absolute top-2 right-2" onClick={onClose}>
          X
        </button>
        <div className="flex">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-48 h-auto object-contain mb-4 md:mb-0 pr-4"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="border rounded p-1 w-16"
                defaultValue={1}
                onChange={handleQuantityChange}
              />
            </div>
            <p className="mb-2">Price: ${product.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded "
              onClick={handleAddToCart}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
