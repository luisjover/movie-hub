import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { HomePage } from '../pages/homePage/HomePage'
import { LoginPage } from '../pages/loginPage/LoginPage';
import { SearchPage } from '../pages/searchPage/SearchPage';
import { FavPage } from '../pages/favPage/FavPage';
import { UserPage } from '../pages/userPage/UserPage';
import { AddMoviePage } from '../pages/addMoviePage/AddMoviePage';
import { AuthenticationGuard } from '../components/login/AuthenticationGuard';



export const RouterPaths = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/' element={AuthenticationGuard(Layout)} >
                        <Route path='home' element={<HomePage />} />
                        <Route path='search' element={<SearchPage />} />
                        <Route path='library' element={<FavPage />} />
                        <Route path='user' element={<UserPage />} />
                        <Route path='form' element={<AddMoviePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
