import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Item has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  const handleUpdate = (id) => {};

  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>
                    <button onClick={() => handleUpdate(item)}>
                      <FaEdit className="text-orange-400" size={20}></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteItem(item._id)}>
                      <FaTrashAlt
                        size={20}
                        className="text-red-600"
                      ></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
