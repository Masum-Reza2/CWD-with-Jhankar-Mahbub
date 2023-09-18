const Link = ({ route }) => {
    let { id, path, name } = route
    return (
        <li><a href={path}>{name}</a></li>
    )
}

export default Link