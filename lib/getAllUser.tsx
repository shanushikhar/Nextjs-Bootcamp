export default async function getAllUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) return new Error("Cant get user");

  return response.json();
}
