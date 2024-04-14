import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import bgImage from "@/assets/bg-img.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  size?: string;
  price: string;
  image: string;
}
const Home = () => {
  const totalItems = 0;
  const totalPrice = 0;
  const removeProduct = () => {};
  const cart: { product: Product; quantity: number }[] = [];

  return (
    <Layout
      cart={cart}
      totalItems={totalItems}
      totalPrice={totalPrice}
      removeProduct={removeProduct}
    >
      <div className=" container mx-auto py-8 ">
        <h1 className="text-3xl font-bold mb-4">Welcome to Altan Uul</h1>
        <p className="text-lg mb-4">
          Discover the beauty and elegance of traditional Mongolia.
        </p>
        <div
          className="h-[60vh] grid grid-row-2 gap-4 bg-cover bg-center bg-no-repeat md:bg-bottom "
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="self-center  p-6 shadow-2xl bg-transparent bg-white-500">
            <h2 className=" text-white text-xl font-bold mb-2 ">
              Collection 2024
            </h2>
            <p className="text-white mb-4">
              Explore our collection for this season
            </p>
            <Link
              to="/products"
              className="text-yellow-500 font-bold align-bottom"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
