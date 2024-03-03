import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";

const Header: React.FC = () => {
  return (
    <header className=" py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
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
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
