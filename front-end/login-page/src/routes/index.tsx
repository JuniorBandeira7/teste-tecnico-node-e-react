import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Login, RegisterPage, EditPage, UserPage} from "../pages";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<RegisterPage/>}/>
                <Route path="/user/:id" element={<UserPage/>}/>
                <Route path="/editar/:id" element={<EditPage/>}/>
                <Route path="*"  element={<Navigate to={"/"}/>}/> 
            </Routes>
        </BrowserRouter>
    )
}