import { useAuth0 } from "@auth0/auth0-react"


export const LoginPage = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            This is Login Page
            <button onClick={() => loginWithRedirect}>Login</button>
        </div>
    )
}
