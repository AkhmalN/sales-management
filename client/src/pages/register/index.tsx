import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ProductLogo from "../../assets/Logo and company - Cropped.png";
import { Link } from "react-router-dom";
import { FormDataRegister, registerShcema } from "../../lib/types/zod/registes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { motion } from "framer-motion";

const RegisterPage: React.FC = () => {
  const [visibleField, setVisibleFields] = useState({
    password: false,
    confirmPassword: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormDataRegister>({
    resolver: zodResolver(registerShcema),
  });

  const togglePasswordVisibility = () => {
    setVisibleFields((prev) => ({
      ...prev,
      password: !prev.password,
    }));
  };

  const toggleConfirmPasswordVisibility = () => {
    setVisibleFields((prev) => ({
      ...prev,
      confirmPassword: !prev.confirmPassword,
    }));
  };

  const registerAccount = async (data: FormDataRegister) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    console.log(isSubmitSuccessful);
  };

  return (
    <div className="flex justify-center items-center font-text">
      <div className="flex flex-col justify-center items-center w-1/2 h-dvh">
        <div className="flex items-center mb-18">
          <div>
            <div className="flex flex-col w-full justify-center items-center h-1/6">
              <div className="rounded-lg cursor-pointer">
                <img src={ProductLogo} alt="Logo" width={40} />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="w-1/2 text-3xl font-bold text-slate-600 mt-3">
                SISTEM SALES MANAGEMENT
              </h2>
            </div>
          </div>
        </div>
        <form
          className="w-2/5 sm:w-full md:w-3/5 lg:w-3/5 xl:w-2/5  mt-4"
          onSubmit={handleSubmit(registerAccount)}
        >
          <label
            htmlFor="firstName"
            className="text-md text-slate-600 font-semibold"
          >
            First Name
          </label>

          <div className="gird grid-rows-1 mb-1">
            <input
              {...register("firstName")}
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter your firstname"
              className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            />
            {errors.firstName && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md mx-1 p-1">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <label
            htmlFor="firstName"
            className="text-md text-slate-600 font-semibold"
          >
            Last Name
          </label>
          <div className="grid grid-rows-1 mb-1">
            <input
              {...register("lastName")}
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter your lastName"
              className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            />
            {errors.lastName && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md mx-1 p-1">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <label
            htmlFor="username"
            className="text-md text-slate-600 font-semibold"
          >
            Username
          </label>
          <div className="grid grid-rows-1 mb-1">
            <input
              {...register("username")}
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            />
            {errors.username && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md mx-1 p-1">
                {errors.username.message}
              </span>
            )}
          </div>
          <label
            htmlFor="email"
            className="text-md text-slate-600 font-semibold"
          >
            Email
          </label>
          <div className="grid grid-rows-1 mb-1">
            <input
              {...register("email")}
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            />
            {errors.email && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md mx-1 p-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <label htmlFor="age" className="text-md text-slate-600 font-semibold">
            Age
          </label>
          <div className="grid grid-rows-1 mb-1">
            <input
              {...register("age", { valueAsNumber: true })}
              id="age"
              type="number"
              name="age"
              placeholder="Enter your age"
              className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            />
            {errors.age && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md mx-1 p-1">
                {errors.age.message}
              </span>
            )}
          </div>
          <label
            htmlFor="password"
            className="text-md text-slate-600 font-semibold"
          >
            Password
          </label>

          <div className="mb-1 relative">
            <div className="grid grid-rows-1 relative">
              <input
                {...register("password")}
                id="password"
                name="password"
                type={visibleField.password ? "text" : "password"}
                placeholder="Enter your password"
                className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 pr-10"
              />

              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {visibleField.password ? (
                  <FaEyeSlash className="text-saas-primary text-[20px]" />
                ) : (
                  <FaEye className="text-saas-primary text-[20px]" />
                )}
              </div>
            </div>
            {errors.password && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md mx-1 p-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <label
            htmlFor="confirmPassword"
            className="text-md text-slate-600 font-semibold"
          >
            Confirm Password
          </label>

          <div className="mb-1 relative">
            <div className="grid grid-rows-1 relative">
              <input
                {...register("confirmPassword")}
                id="confirmPassword"
                name="confirmPassword"
                type={visibleField.confirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 pr-10"
              />

              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {visibleField.confirmPassword ? (
                  <FaEyeSlash className="text-saas-primary text-[20px]" />
                ) : (
                  <FaEye className="text-saas-primary text-[20px]" />
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md mx-1 p-1">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={`bg-saas-primary bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-3 w-full ${
                isSubmitting && "bg-opacity-55"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex justify-center items-center"
                >
                  <FaSpinner className="mr-2 animate-spin" />
                  <span>Processing...</span>
                </motion.div>
              ) : (
                <div className="flex justify-center items-center">
                  <span>Login</span>
                </div>
              )}
            </button>
          </div>
          <div className="mt-2">
            <span className="text-slate-700 font-semibold text-md">
              have an account?{" "}
              <Link className="text-saas-primary font-bold text-md" to={"/"}>
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
