import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/Home/HomePage";
import ResumePage from "../Page/Resume/ResumePage";
import ProjectPage from "../Page/Project/ProjectPage";
import BlogsPage from "../Page/Blogs/BlogsPage";
import ContactPage from "../Page/Contact/ContactPage";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Errore.........</div>,
        children:[
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/resume',
                element: <ResumePage></ResumePage>
            },
            {
                path: '/project',
                element: <ProjectPage></ProjectPage>
            },
            {
                path: '/blogs',
                element: <BlogsPage></BlogsPage>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
        ]
    }
])
export default Route;