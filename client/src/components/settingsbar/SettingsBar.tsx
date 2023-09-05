// import { LogoutButton } from "../logout/Logout"
import { IoIosConstruct } from "react-icons/io";
import './settingsBar.css';
import { useAuth0 } from "@auth0/auth0-react";


export const SettingsBar = () => {

    const { logout } = useAuth0();


    return (
        <nav className="settings-menu-bar">

            <span className="setting-menu-options-construction">Language <IoIosConstruct className='construction-icon' /></span>
            <span className="setting-menu-options-construction">Notifications <IoIosConstruct className='construction-icon' /></span>
            <button onClick={() => logout()}>LOGOUT</button>
        </nav>
    )
}