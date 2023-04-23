import getAllUser from "@/lib/getAllUser";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User details",
  description: "About user desc",
};

export default async function User() {
  const userData: Promise<UserType[]> = getAllUser();
  const users = await userData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home page</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <h3 key={user.id}>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </h3>
        );
      })}
    </section>
  );

  return content;
}
