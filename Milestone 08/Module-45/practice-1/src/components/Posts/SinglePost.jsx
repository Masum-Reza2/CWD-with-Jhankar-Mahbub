import { useLoaderData } from "react-router-dom"

const SinglePost = () => {
    const details = useLoaderData();
    console.log(details)
    let { userId, id, title, body } = details;
    return (
        <div style={{ border: '2px solid red' }}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={() => history.back(1)}>Go back</button>
        </div>
    )
}

export default SinglePost