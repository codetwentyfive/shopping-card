import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to our Mongolian Clothing Store</h1>
      <p className="text-lg mb-4">Discover the beauty and elegance of traditional Mongolian clothing.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Men's Collection</h2>
          <p className="text-gray-600 mb-4">Explore our collection of traditional Mongolian clothing for men.</p>
          <Link to="/products?category=men" className="text-blue-500">Shop Men's Collection</Link>
        </div>
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Women's Collection</h2>
          <p className="text-gray-600 mb-4">Discover our selection of elegant Mongolian dresses and accessories for women.</p>
          <Link to="/products?category=women" className="text-blue-500">Shop Women's Collection</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
