import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useAuth from "./useAuth";
import { use } from "react";

const useCart = () => {
  const { user } = useAuth();
  //  tan stack query
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", use?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart,refetch];
};

export default useCart;
