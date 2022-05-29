import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();

    const { data: tools, isLoading } = useQuery("tools", () =>
      fetch("https://afternoon-sierra-85387.herokuapp.com/tool").then((res) =>
        res.json()
      )
    );

    // image key
    const imageStorageKey = "4295ac4d47b569312bea67b440cdbdbb";

    // handle submit
    const onSubmit = async (data) => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            const img = result.data.url;
            const product = {
              name: data.name,
              email: data.email,
              specialty: data.specialty,
              img: img,
            };
            // send to your database
            fetch("https://secret-dusk-46242.herokuapp.com/product", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(product),
            })
              .then((res) => res.json())
              .then((inserted) => {
                if (inserted.insertedId) {
                  toast.success("Product added successfully");
                  reset();
                } else {
                  toast.error("Failed to add the product");
                }
              });
          }
        });
    };

    if (isLoading) {
      return <Loading></Loading>;
    }


    return (
      <div className='container px-12'>
        <h1 className="text-center text-3xl my-5">Add a Product</h1>
        <div className='flex justify-center'>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                {...register("specialty")}
                className="select input-bordered w-full max-w-xs"
              >
                {/* {tools.map((tool) => (
                <option key={tool._id} value={tool.name}>
                  {tool.name}
                </option>
             ))}
             */}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs text-white btn-primary"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    );
};

export default AddProduct;