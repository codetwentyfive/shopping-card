import React from "react";

interface CartProps {
  cart: { product: Product; quantity: number }[];
  totalItems: number;
  totalPrice: number;
  removeProduct: (productId: number) => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC<CartProps> = ({
  cart,
  totalItems,
  totalPrice,
  removeProduct,
}) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Shopping Cart</h2>
      <p className="text-gray-600 mb-2">
        Total Items: <span className="font-bold">{totalItems}</span>
      </p>
      <ul>
        {cart.map(({ product, quantity }) => (
          <li key={product.id} className="mb-2">
            <span className="font-bold">{product.name}</span> -{" "}
            <span className="text-gray-600">
              {product.price}
            </span>{" "}
            x <span className="font-bold">{quantity}</span>
            <button onClick={() => removeProduct(product.id)}>remove</button>
          </li>
        ))}
      </ul>
      <p className="text-gray-600 mt-4">
        Total Price: <span className="font-bold">${totalPrice}</span>
      </p>
    </div>
  );
};

export default Cart;
