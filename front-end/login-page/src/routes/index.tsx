import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import {Login, UserPage, EditPage, RegisterPage} from "../pages";
import {Login, RegisterPage} from "../pages";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<RegisterPage/>}/>
                <Route path="*"  element={<Navigate to={"/"}/>}/> 
            </Routes>
        </BrowserRouter>
    )
}