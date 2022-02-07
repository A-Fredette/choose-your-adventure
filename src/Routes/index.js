import {
    Routes,
    Route
} from "react-router-dom";
import React from 'react'
import SignIn from "../Components/SignIn/SignIn";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path=''
                element={<SignIn/>}
            >
            </Route>
            <Route path='/signin' element={<SignIn/>}>
            </Route>
        </Routes>
    )
}

export default AppRoutes;