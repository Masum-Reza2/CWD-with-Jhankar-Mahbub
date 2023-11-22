import { useLocation, useNavigate } from "react-router-dom";
import useGlobal from "../../Hooks/useGlobal"
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleLogin } = useGlobal();
    const { state } = useLocation();
    const navigate = useNavigate();
    const publicAxios = useAxiosPublic();

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result?.user;
                console.log('user inside googleauth', user)
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email
                }
                publicAxios.post('/users', userInfo)
                    .then(result => {
                        console.log(result.data)
                        navigate(state || '/')
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="ml-10 mb-10" onClick={handleGoogle}>
            <div className="divider"></div>

            <button className="btn">

                Google
            </button>
        </div>
    )
}

export default SocialLogin