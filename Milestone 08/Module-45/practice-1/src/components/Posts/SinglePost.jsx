import { useLoaderData, useNavigate } from "react-router-dom"

const SinglePost = () => {
    const details = useLoaderData();
    let { userId, id, title, body } = details;
    const navigate = useNavigate();
    // console.log(details)

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div style={{ border: '2px solid red' }}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    )
}

export default SinglePost