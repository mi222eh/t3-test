"use client";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(1).max(20),
  password: z.string().min(1).max(20),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await signIn("credentials", {
          username: data.username,
          password: data.password,
          callbackUrl: "/",
        });
      })}
    >
      <div className="my-4">
        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className={`w-full rounded-md border border-gray-300 px-3 py-2 ${
            errors.username ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Enter your username"
          {...register("username")}
        />
        {errors.username && (
          <span className="text-sm text-red-500">
            {errors.username.message?.toString()}
          </span>
        )}
      </div>
      <div className="my-4">
        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={`w-full rounded-md border border-gray-300 px-3 py-2 ${
            errors.password ? "border-red-500" : ""
          }`}
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message?.toString()}
          </span>
        )}
      </div>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
