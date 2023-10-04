import { createBrowserRouter } from "react-router-dom";
import Roote from "../MainLaout/Roote";
import Home from "../assets/Pages/Home/Home";
import Login from "../assets/Pages/Login/Login";
import Register from "../assets/Pages/Register/Register";
import News from "../NewsPage/News";
import PraivateRoute from "./PrivateRoute/PraivateRoute";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Roote></Roote>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch('/news.json')
            },
            {
                path : "/news/:id",
                element : <PraivateRoute><News></News></PraivateRoute>
            },
            {
                path : "login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            }
        ]
    }
])
export default router;