const WithLayout = ({ children }) => {
    return (
        <div>
            <h1>Header</h1>
            {children}
            <h1>footer</h1>
        </div>
    )
}

export default WithLayout