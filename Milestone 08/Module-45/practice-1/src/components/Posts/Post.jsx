import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    // console.log(post)
    let { id, title } = post;
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/post/${id}`)
    }
    
    return (
        <div style={{ border: '2px solid purple', marginBottom: '10px', borderRadius: '10px' }}>
            <h1>Post id : {id}</h1>
            <h3>{title}</h3>
            {/* <Link to={`/post/${id}`}><button>Details</button></Link> */}
            <button onClick={handleDetails}>Show Details</button>
        </div>
    )
}

export default Post