

import './userPage.css';
import Logo from '../../assets/images/app-logo.png';
import { ProfileChart } from '../../components/profileChart/ProfileChart';
import { useAuth0 } from '@auth0/auth0-react';

export const UserPage = () => {
    const { user } = useAuth0()


    return (
        <section className="user-page-container">

            <div className='add-movie-heading'>

                <img className="add-movie-logo" src={Logo} alt="app logo" />

            </div>

            <ProfileChart
                imageUrl={user?.picture}
                userName={user?.name}
            />

        </section>
    )
}
