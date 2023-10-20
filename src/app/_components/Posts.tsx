"use client";
import { api } from "~/trpc/react";

export default function Posts() {
  const { data, isLoading } = api.post.getAll.useQuery();

  return (
    <div className="flex flex-col gap-4">
      {data?.map((post) => (
        <div
          key={post.id}
          className="card card-bordered flex flex-col gap-2 p-4 shadow-2xl"
        >
          <h1 className="text-2xl text-white">{post.name}</h1>
          <p className="text-white">{post.createdAt.toDateString()}</p>
        </div>
      ))}

      {isLoading && <div className="loading loading-spinner m-auto w-10"></div>}
    </div>
  );
}
