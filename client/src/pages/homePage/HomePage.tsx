import { ItemList } from "../../components/topTrend/ItemList.tsx";
import { IoSettingsSharp } from 'react-icons/io5';
import Logo from '../../assets/images/app-logo.png';
import './homePage.css';
import { useAuth0 } from "@auth0/auth0-react";
import { SettingsBar } from "../../components/settingsbar/SettingsBar.tsx";
import { useEffect, useRef, useState } from "react";
import { createNewUser, getAllUsers } from "../../api/fetchApi.ts";
import { useUserContext } from "../../utils/hooks/useUserContext";

// type User = {
//     id: number,
//     name: string,
//     email: string,
//     movies: Movie[]
// }

// type Movie = {
//     id: number,
//     title: string,
//     year: number,
//     coverImg: string,
//     genre: string,
//     score: number,
//     userId: number
// }

export const HomePage = () => {

    const { setCurrentLoggedUser } = useUserContext();

    const { isAuthenticated, user, getAccessTokenSilently, isLoading, error } = useAuth0();

    const [settingsExpanded, setSettingsExpanded] = useState(false)
    const settingMenu = useRef<HTMLDivElement | null>(null)



    const setLogedUser = async () => {

        if (isAuthenticated && user && user.email) {

            const allUsers = await getAllUsers(getAccessTokenSilently);
            const matchedUser = await allUsers.find((filteredUser: any) => filteredUser.email === user?.email);

            if (!matchedUser && user) {

                const newUser = await createNewUser(user, getAccessTokenSilently);
                setCurrentLoggedUser(newUser);

            } else {

                setCurrentLoggedUser(matchedUser);
            }
        }
    }


    useEffect(() => {

        setLogedUser();

    }, [isAuthenticated])

    useEffect(() => {

        settingMenu.current?.classList.toggle('setting-menu-container-expanded')

    }, [settingsExpanded])



    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    const handleToggleSettingsMenu = () => {
        setSettingsExpanded(!settingsExpanded)
    }


    return (

        <section className="home-page-container">
            <div className="home-heading-container">
                <img className="homepage-logo" src={Logo} alt='App Logo' />
                <span onClick={handleToggleSettingsMenu}>
                    <IoSettingsSharp className='home-setting-icon' />
                </span>

            </div>
            {settingsExpanded ? <div ref={settingMenu} className="settings-menu-container">
                <SettingsBar />
            </div> : <></>}
            <ItemList />
        </section>
    )

}