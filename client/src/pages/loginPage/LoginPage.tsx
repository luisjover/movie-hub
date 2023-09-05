import './loginPage.css';
import { useAuth0 } from "@auth0/auth0-react";
import BgImg from "../../assets/images/bg-image.jpg";
import Logo from '../../assets/images/app-logo.png';
// import { LoginButton } from "../../components/login/Login"
import { useEffect } from 'react';


export const LoginPage = () => {

    const { loginWithRedirect } = useAuth0();



    return (



        <>
            <div className='login-page-img-container'>
                <img className='login-page-img' src={BgImg} alt={`Image or Cover of Freddie Krueger`} />
                <div className='login-page-glass'>
                </div>
                <div className='login-page-title'>
                    <img className='login-page-logo' src={Logo} alt='App Logo' />
                </div>
                <button className='login-button' onClick={() => loginWithRedirect()}>LOGIN</button>
            </div>

        </>




    )

}