import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import ProductLogo from "../../assets/Logo and company - Cropped.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataLogin, loginSchema } from "../../lib/types/zod/login";
import { motion } from "framer-motion";
import { login } from "../../lib/action/login";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";

const LoginPage: React.FC = () => {
  const { storeInfo } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataLogin>({
    resolver: zodResolver(loginSchema),
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginAccount = async (data: FormDataLogin) => {
    try {
      const response = await login(data);
      const result = response.status
        ? toast.success(response.message)
        : toast.warn(response.message);

      if (response.status) {
        storeInfo(data);
        navigate("/dashboard");
      }
      return result;
    } catch (error: any) {
      toast.warn(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center font-text">
      <div className="w-2/5 sm:w-3/5 md:4/5 lg:full flex flex-col justify-center items-center">
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
          onSubmit={handleSubmit(loginAccount)}
        >
          <label
            htmlFor="username"
            className="text-md text-slate-600 font-semibold"
          >
            username
          </label>
          <div className="mb-4  mt-2">
            <input
              {...register("username")}
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            {errors.username && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md p-1">
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
          <div className="mb-4 mt-2">
            <input
              {...register("email")}
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            {errors.email && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md p-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <label
            htmlFor="password"
            className="text-md text-slate-600 font-semibold"
          >
            Password
          </label>

          <div className="mb-4 mt-2 relative">
            <div className="relative">
              <input
                {...register("password")}
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 mb-2"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <span className="bg-red-500 bg-opacity-20 text-red-500 w-auto font-bold rounded-md p-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={`bg-saas-primary  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-3 w-full ${
                isSubmitting ? "bg-opacity-50" : "bg-opacity-80"
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
        </form>
        <div className="mt-2">
          <span className="text-slate-700 font-semibold text-md">
            don't have an account?{" "}
            <Link
              className="text-saas-primary font-bold text-md"
              to={"/register"}
            >
              register here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
