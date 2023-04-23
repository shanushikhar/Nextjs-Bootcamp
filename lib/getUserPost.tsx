export default async function getUser(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) return new Error("Cant fetch single post");

  return response.json();
}
