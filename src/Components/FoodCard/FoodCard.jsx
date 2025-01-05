
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src={image}
          alt="Foods"
        />
      </figure>
      <p className="absolute right-0 mr-10 mt-6 px-3 rounded bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-outline border-0 bg-slate-200 hover:border-b-yellow-500 hover:text-yellow-500 border-b-4 border-b-neutral mt-4">ADD TO CART</button>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;
