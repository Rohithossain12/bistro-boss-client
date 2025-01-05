import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item || {};
  const navigate = useNavigate();
  const location = useLocation();
  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useCart();

  const handleAddToCard = () => {
    if (user && user.email) {
      // send cart item to the database

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosInstance.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Added to cart");
        }
        // refetch the cart to update the badge
        refetch();
      });
    } else {
      toast.error("Please login to add to cart");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Foods" />
      </figure>
      <p className="absolute right-0 mr-10 mt-6 px-3 rounded bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCard}
            className="btn btn-outline border-0 bg-slate-200
         hover:border-b-yellow-500 hover:text-yellow-500 
         border-b-4 border-b-neutral mt-4"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
