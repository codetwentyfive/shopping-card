import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Header= () => {
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
