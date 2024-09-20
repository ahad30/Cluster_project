/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UseLoader from "@/components/UseLoader";

const login = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // console.log(data)
    setLoading(true);
    try {
      axios
        .post(`${process.env.VITE_BACKEND_API}/auth/login`, data)
        .then((res) => {
          if (res?.data?.data?.token) {
            localStorage.setItem("admin-access-token", res?.data?.data?.token);
            toast.success(res?.data?.message);
            setLoading(false);
            router.push("/dashboard/admin");
          }
        });
    } catch (err) {

      console.log(err);
    }
  };

  if (loading) {
    return <UseLoader />;
  }

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white md:m-0 md:rounded-none m-2 rounded-md shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-center">Admin login Here</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative mb-8">
                    <input
                      {...register("email")}
                      defaultValue={"admin@gmail.com"}
                      id="email"
                      name="email"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-blue-600 focus:borer-rose-600"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative">
                    <input
                      {...register("password")}
                      defaultValue={"password"}
                      id="password"
                      name="password"
                      type="password"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                    focus:outline-none focus:border-b-blue-600"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="submit"
                      className="bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-200 text-white rounded-md px-3 py-1 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
