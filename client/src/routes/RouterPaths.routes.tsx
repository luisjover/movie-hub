import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"


export const RouterPaths = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<LoginPage />} />
                </Route>
            </Routes>

        </BrowserRouter>


    )
}
