import { getServerSession } from "next-auth";
import { useSession, getSession } from "next-auth/react";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="m-auto flex w-max flex-col gap-2">
      {session && (
        <>
          <p className="text-1xl text-center text-white">
            <span>Logged in as {session?.user?.name}</span>
          </p>
          <Link href="/api/auth/signout" className="btn btn-error btn-xs">
            Sign out
          </Link>
        </>
      )}

      {!session && (
        <>
          <p className="text-1xl text-center text-white">
            <span>Not logged in</span>
          </p>

          <div className="flex gap-2">
            <Link href="/api/auth/signin" className="btn btn-primary btn-xs">
              Sign in
            </Link>
            <Link href="/signup" className="btn btn-secondary btn-xs">
              Sign up
            </Link>
          </div>
        </>
      )}
      <Posts />
    </main>
  );
}

async function Posts() {
  const session = await getServerAuthSession();
  if (!session) {
    return null;
  }

  const posts = await api.post.getAll.query();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card card-bordered flex flex-col gap-2 p-4 shadow-2xl"
        >
          <h1 className="text-2xl text-white">{post.name}</h1>
          <p className="text-white">{post.createdAt.toDateString()}</p>
        </div>
      ))}
    </div>
  );
}
