import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPost from "./components/UserPost";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<UserType> = getUser(userId);
  const user: UserType = await userData;

  return {
    title: user.name,
    description: `this is the data of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<UserType> = getUser(userId);
  const postData: Promise<PostType[]> = getUserPost(userId);

  // const [users,userpost] = await Promise.all([userData,postData])

  const user = await userData;

  return (
    <section>
      <h2 key={user.id}>{user.name}</h2>
      <hr />
      <Suspense fallback={<h3>Loading......</h3>}>
        {/* @ts-expect-error Server Component*/}
        <UserPost promise={postData} />
      </Suspense>
    </section>
  );
}
