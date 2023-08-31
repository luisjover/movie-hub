import { useAuth0 } from "@auth0/auth0-react"

export const HomePage = () => {

    const { logout, user, isLoading } = useAuth0();

    if (isLoading) return <div>is loading...</div>

    return (
        <div>
            This is Home Page
            <button onClick={() => logout}>LogOut</button>
        </div>
    )
}
