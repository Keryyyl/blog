async function getAllPosts(token: string) {
  return fetch("http://localhost:5000/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json())
}
