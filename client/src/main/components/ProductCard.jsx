export const ProductCard = ({ product }) => {
  return (
    <div className="border p-1 rounded-md shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <div className=" flex justify-between">
        <p className="text-gray-500">${product.price}</p>
        <p className="text-yellow-500">{"★".repeat(product.rating)}</p>
      </div>
      <div className=" flex justify-between  text-xs font-medium">
        <button className=" bg-green-500 text-white p-2 w-full">Buy Now</button>
        <button className=" bg-blue-500 text-white p-2 w-full">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
