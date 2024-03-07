import React, { MouseEventHandler } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface CartProps {
  cart: { product: Product; quantity: number }[];
  totalItems: number;
  totalPrice: number;
  removeProduct: (productId: number) => void;
  toggleCart:MouseEventHandler<HTMLButtonElement>;
}

const Cart: React.FC<CartProps> = ({
  cart,
  totalItems,
  totalPrice,
  removeProduct,
  toggleCart,
}) => {
  return (
    <div className="border border-black-500 rounded-md backdrop-filter bg-white p-4 ">
     <div className="flex justify-between">
     <h2 className="text-black text-2xl font-bold mb-2 pr-4">Shopping Cart</h2>
     <button className="text-red-600 border border-solid rounded-lg  px-4 items-center" onClick={toggleCart}>x</button>
      </div> 
      <p className=" text-black mb-2">
        Total Items: <span className="font-bold">{totalItems}</span>
      </p>
      <ul>
        {cart.map(({ product }) => (
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
