async function getPosts() {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  })

  return res.json()
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`} className="text-xl font-medium">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
