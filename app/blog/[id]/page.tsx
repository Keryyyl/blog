async function getPost(id: string) {
  const res = await fetch(`http://localhost:5000/posts/${id}`)
  return res.json()
}

export default async function PostPage({
  params,
}: {
  params: { id: string }
}) {
  const post = await getPost(params.id)

  return (
    <article className="container py-10 prose">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
