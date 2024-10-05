import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import {Login, UserPage, EditPage, RegisterPage} from "../pages";
import {Login} from "../pages";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                    
                <Route path="*"  element={<Navigate to={"/"}/>}/> 
            </Routes>
        </BrowserRouter>
    )
}