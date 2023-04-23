type Props = {
  promise: Promise<PostType[]>;
};

export default async function UserPost({ promise }: Props) {
  const posts = await promise;

  const content = (
    <article>
      {posts.map((post) => {
        return (
          <>
            <h3 key={post.id}>{post.body}</h3>
            <h4>{post.title}</h4>
            <br />
          </>
        );
      })}
    </article>
  );

  return content;
}
