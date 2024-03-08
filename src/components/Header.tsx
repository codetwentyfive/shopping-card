import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useTheme } from "./theme-provider";
interface Product {
  id: number;
  name: string;
  description: string;
  size?: string;
  price: string;
  image: string;
}
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
  const { theme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  useEffect(() => {
    const systemThemePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
    setSystemTheme(systemThemePreference);
  }, []);


  const getHeaderBgClass = (theme: string) => {
    switch (theme) {
      case "dark":
        return "bg-black";
      case "light":
        return "bg-white"; 
      default:
        return systemTheme === "dark" ? "bg-black" : "bg-white";
    }
  };
  return (
    <header className={`py-3 sticky top-0 z-50  ${getHeaderBgClass(theme)}  `}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg pr-2 font-bold">
          Altan Uul
        </Link>
        <nav>
          <ul className=" text-sm md:text-base flex space-x-4 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
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
                <div className="z-10 absolute bg-white-500 top-16 right-10 lg:right-80 shadow-lg rounded-lg">
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
