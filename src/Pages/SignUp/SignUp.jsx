import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user added to the database')
              reset();
              toast.success("User Created successfully");
              navigate("/");
            }
          });
        })
        .catch(() => {
          toast.error("User Created Unsuccessful");
        });
    });
  };

  return (
    <div className="flex md:flex-row flex-col justify-center items-center">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="flex-1">
        <img
          className="w-full h-full "
          src="https://img.freepik.com/premium-vector/boys-are-signed-account_118167-6055.jpg?semt=ais_hybrid"
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0 shadow ">
          <h2 className="text-center font-bold text-2xl">Please Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-500">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">email is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-600">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  password must have one uppercase, one lowercase,one number and
                  one special characters{" "}
                </p>
              )}
            </div>
            <input
              type="submit"
              className="btn w-full mt-5 btn-accent"
              value="Sign Up"
            />
          </form>
           
           <SocialLogin></SocialLogin>

          <p className="ml-8">
            <small>
              Already have an Account ?
              <Link to="/login" className="text-green-500">
                Please Login
              </Link>{" "}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
