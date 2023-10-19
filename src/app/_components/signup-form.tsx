"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Input from "./Input";
import { api } from "~/trpc/react";
import { redirect, useRouter } from "next/navigation";
import Form from "./Form";
import Label from "./Label";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

export default function SignupForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const makeUser = api.user.register.useMutation();

  const onSubmit = async (data: FormData) => {
    await makeUser.mutateAsync({
      password: data.password,
      username: data.username,
    });
    router.push("/login");
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-fit flex-col gap-2 p-4"
    >
      <div>
        <Label>Username</Label>
        <Input className="w-full" {...register("username")} />
      </div>

      <div>
        <Label>Password</Label>
        <Input className="w-full" type="password" {...register("password")} />
      </div>

      <div>
        <Label>Confirm Password</Label>
        <Input
          className="w-full"
          type="password"
          {...register("confirmPassword")}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </Form>
  );
}
