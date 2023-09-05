
import { useAuth0 } from "@auth0/auth0-react";

const { getAccessTokenSilently } = useAuth0();


export const getToken = async () => {
    const accessToken = await getAccessTokenSilently();
    return accessToken;
};