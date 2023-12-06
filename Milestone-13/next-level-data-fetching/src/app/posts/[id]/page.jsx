import Link from "next/link";
import styles from './Details.module.css'

export async function generateStaticParams() {
    const res = await fetch(`http://localhost:3004/posts`)
    const posts = await res.json();
    const ids = posts?.map(post => {
        return {
            id: post?.id + ""
        }
    })
    return ids
    // return [{ id: '1' }, { id: '2' }]
}

const page = async ({ params }) => {
    // console.log(params.id)
    //  dynamic routes are by default dynamic, not need to explicitely mention 'cach', 'validating' 'no store' etc
    const res = await fetch(`http://localhost:3004/posts/${params?.id}`)
    const post = await res.json();
    return (
        <div>
            <h1 className={styles.header_text}>Details page</h1>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.desc}</p>
                    <p>Likes : {post.likeCount}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/posts`}>
                            <button className="btn btn-accent">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page