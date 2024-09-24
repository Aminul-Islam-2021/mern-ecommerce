export const ProductListCard = ({ product }) => {
    return (
      <div className="border p-4 flex space-x-4 rounded-lg shadow-md">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-24 w-24 object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">Add to Cart</button>
        </div>
      </div>
    );
  };
  