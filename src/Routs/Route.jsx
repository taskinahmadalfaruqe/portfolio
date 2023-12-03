import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/Home/HomePage";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Errore.........</div>,
        children:[
            {
                path: '/',
                element: <HomePage></HomePage>
            }
        ]
    }
])
export default Route;