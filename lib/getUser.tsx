export default async function getUser(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!response.ok) return new Error("Cant fetch single user");

  return response.json();
}
