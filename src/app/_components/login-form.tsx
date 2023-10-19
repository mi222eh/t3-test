"use client";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";

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
    <Form
      className="flex w-fit flex-col gap-2 justify-self-center p-4"
      onSubmit={handleSubmit(async (data) => {
        await signIn("credentials", {
          username: data.username,
          password: data.password,
          callbackUrl: "/",
        });
      })}
    >
      <div className="flex flex-col">
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          placeholder="Enter your username"
          {...register("username")}
        />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="password">Password</Label>
        <Input
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
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </Form>
  );
}
