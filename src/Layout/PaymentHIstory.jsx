import React from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const PaymentHIstory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="Payment History"
        subHeading="At a Glance !"
      ></SectionTitle>
      <div>
        <h2 className="text-3xl mb-5">Total Payment : {payments?.length}</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-orange-300 text-white">
              <tr>
                <th># </th>
                <th>Email</th>
                <th>transaction Id</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Payment date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments?.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment?.email}</td>
                  <td>{payment?.transactionId}</td>
                  <td>${payment?.price}</td>
                  <td>{payment?.status}</td>
                  <td>{payment?.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHIstory;
