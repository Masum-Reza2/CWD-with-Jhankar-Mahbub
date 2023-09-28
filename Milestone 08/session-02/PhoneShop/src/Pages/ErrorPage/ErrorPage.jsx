import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className='h-screen flex items-center justify-center'>

            <div className='p-5 border shadow-md shadow-gray-500 rounded-md space-y-5'>
                <h1 className='font-bold text-2xl text-rose-600'>Oops Something wrong</h1>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to={'/'}>
                    <button className='px-3 py-1 shadow-md  shadow-black'>Goto Home</button>
                </Link>
            </div>

        </div>
    )
}

export default ErrorPage