import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Posts from "./_components/Posts";
import { CreatePost } from "./_components/create-post";

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

          <div className="m-auto flex gap-2">
            <Link href="/api/auth/signin" className="btn btn-primary btn-xs">
              Sign in
            </Link>
            <Link href="/signup" className="btn btn-secondary btn-xs">
              Sign up
            </Link>
          </div>
        </>
      )}
      {session && <CreatePost></CreatePost>}
      {session && <Posts></Posts>}
      <div></div>
    </main>
  );
}
