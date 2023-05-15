import { Navigate, Routes, Route, Link } from "react-router-dom";
import { HomePage, AboutPage, Login, NavBar } from './'
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
                <NavBar/>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<Login />} />
                <Route path="about" element={<AboutPage />} />

                <Route path='/*' element={<Navigate to="/about" />} />

            </Routes>
        </UserProvider>
    )
}
