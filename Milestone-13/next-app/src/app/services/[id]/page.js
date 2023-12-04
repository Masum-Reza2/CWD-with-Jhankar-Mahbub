const page = ({ params, searchParams }) => {

    return (
        <div>
            <h1>this is dynamic page of services {params.id}</h1>
            <h1>query for {searchParams.category}</h1>
        </div>
    )
}

export default page