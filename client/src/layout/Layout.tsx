
import { UserContextProvider } from '../context/UserContextProvider';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/navbar/NavBar';
import { FilterProvider } from '../context/FilterContext';

export const Layout = () => {
    return (
        <>
            <UserContextProvider>
                <FilterProvider>
                    <Outlet />
                    <NavBar />
                </FilterProvider>
            </UserContextProvider>
        </>
    )
}