import { useLoaderData } from "react-router-dom"
import Post from "./Post";

const Posts = () => {
    const allPosts = useLoaderData();

    return (
        <div>
            <h1>Posts : {allPosts.length}</h1>
            <div>
                {
                    allPosts.map((post, index) => <Post key={index} post={post} />)
                }
            </div>
        </div>
    )
}

export default Posts