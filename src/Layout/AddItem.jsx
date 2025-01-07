import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle heading="Add an Item" subHeading="Whats new"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-4 ">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>

            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex items-center  gap-5 my-4">
            {/* category */}
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a Category?
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* Price  */}

            <div className="form-control w-full  flex-1 ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>

              <input
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* Recipe Details */}
          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          {/* Choose File */}
          <div className="form-control w-full my-4 ">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input  w-full max-w-xs"
            />
          </div>
          <button className="btn btn-neutral mt-2">
            <FaUtensils></FaUtensils> Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
