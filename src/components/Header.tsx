import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import Cart from "./Cart";

interface HeaderProps {
  cart: { product: Product; quantity: number }[];
  totalItems: number;
  totalPrice: number;
  removeProduct: (id: number) => void;
}

const Header = ({
  cart,
  totalItems,
  totalPrice,
  removeProduct,
}: HeaderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg pr-2 font-bold">
          Altan Uul
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <ModeToggle />
            </li>
            <li>
              <button onClick={toggleCart} className="m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 4h-3.78l-2-4H8.78l-2 4H3c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1zM8 3h4l1.6 3H6.4L8 3zM4 17V7h12l.001 10H4z"
                    clipRule="evenodd"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="z-20 justify-center items-center  absolute bg-green-500   rounded-lg py-1 px-3">
                    {totalItems}
                  </span>
                )}
              </button>
              
              {isCartOpen && (
                <div className="z-10 absolute top-16 right-10 lg:right-80 shadow-lg rounded-lg">
                  <Cart
                    cart={cart}
                    totalItems={totalItems}
                    totalPrice={totalPrice}
                    removeProduct={removeProduct}
                    toggleCart={toggleCart}
                  />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
