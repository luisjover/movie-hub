
import { useAuth0 } from "@auth0/auth0-react";
import "./itemList.css";
import { Item } from "./item/Item";
import { useUserContext } from "../../utils/hooks/useUserContext";







export const ItemList = () => {

    const { currentUser } = useUserContext();
    console.log(currentUser);

    // useEffect(() => {
    //     async function fetchUserByEmail() {
    //         const userEmail = currentUser?.email;
    //         if (userEmail) {
    //             const userData = await getUserByEmail(userEmail, getAccessTokenSilently);
    //             setCurrentUser(userData);
    //         }
    //     };
    //     fetchUserByEmail()

    // }, []);


    return (
        <div className="trendlist-wrapper">
            {currentUser?.movies && currentUser?.movies.map(movie => (
                <Item
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    genre={movie.genre}
                    score={movie.score}
                    imageUrl={movie.coverImg}
                />
            ))}


            <div className="white-space"></div>
        </div>
    )
}