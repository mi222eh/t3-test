import { getServerSession } from "next-auth";
import { useSession, getSession } from "next-auth/react";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main>
      <div className="flex justify-between">
        <h1 className="p-2 text-4xl">Posts</h1>

        {session && (
          <div className="flex gap-2 p-4">
            <p className="text-1xl text-center text-white">
              <span>Logged in as {session?.user?.name}</span>
            </p>
            <Link href="/api/auth/signout" className="btn btn-error btn-xs">
              Sign out
            </Link>
          </div>
        )}

        {!session && (
          <div className="flex gap-2 p-4">
            <Link href="/api/auth/signin" className="btn btn-primary btn-xs">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
