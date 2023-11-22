import useGlobal from "../../../Hooks/useGlobal";

const UserHome = () => {
    const { user } = useGlobal();
    return (
        <div>
            <h1 className="text-2xl font-bold">Hello welcome {user?.displayName || 'back'}</h1>
        </div>
    )
}

export default UserHome