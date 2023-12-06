import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1>Welcome to next level data fetching...</h1>
      <Link href="/posts">
        <button className="btn">see posts</button>
      </Link>
    </div>
  )
}

export default page