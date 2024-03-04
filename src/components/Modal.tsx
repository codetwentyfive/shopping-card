import React from "react";

interface ModalProps {
  product: {
    image: string;
    name: string;
    description: string;
    price: string;
  };
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-8 rounded-md max-w-lg">
        <button className="absolute top-2 right-2" onClick={onClose}>
          X
        </button>
        <div className="flex">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-contain mr-8"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="border rounded p-1 w-16"
                defaultValue={1}
              />
            </div>
            <p className="text-gray-600 mb-2">Price: {product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
