import Link from "next/link";
import styles from './Posts.module.css'

const PostsPage = async () => {
    // the component will be an async component when we apply fetching operation.

    const res = await fetch("http://localhost:3004/posts", {
        // cache: "force-cache"  //will make it static
        // next: {
        //     revalidate: 5  // will make it dynamic
        // }
        cache: "no-store"  //will make it super dynamic
    })
    const posts = await res.json();
    // console.log(posts)

    return (
        <div>
            <h1 className={styles.header_text}>Total Posts : {posts.length}</h1>
            <div className="grid gap-5 w-[80%] mx-auto grid-cols-1">
                {
                    posts?.map(post => <div key={post?.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.desc}</p>
                            <p>Likes : {post.likeCount}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/posts/${post.id}`}>
                                    <button className="btn btn-primary">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default PostsPage