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
    <div className="border border-yellow-500 rounded-md backdrop-filter bg-white p-4 ">
      <h2 className="text-black text-2xl font-bold mb-2">Shopping Cart</h2>
      <p className=" text-black mb-2">
        Total Items: <span className="font-bold">{totalItems}</span>
      </p>
      <ul>
        {cart.map(({ product, quantity }) => (
          <li key={product.id} className="text-black mb-2">
            <span className=" text-black font-bold">{product.name}</span> -{" "}
            <span className="text-black">${product.price}</span> x{" "}
            <span className=" text-black font-bold"> {product.quantity}</span>{" "}
            <button
              className="text-red-500  rounded-lg px-2  bpx-2 "
              onClick={() => removeProduct(product.id)}
            >
              {" "}
              remove
            </button>
          </li>
        ))}
      </ul>
      <p className=" text-black mt-4">
        Total Price ={" "}
        <span className=" text-green-400 font-bold">${totalPrice}</span>
      </p>
    </div>
  );
};

export default Cart;
