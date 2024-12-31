import { createBrowserRouter } from "react-router-dom";


// Layouts and components are imported here
import Dashboard from "./layout/Dashboard";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([{
     path: "/",
     element: <Dashboard />,
     errorElement: <ErrorPage />, // if no route is found, this component will be rendered
     children: [
         {
             path: "",
             element: <Home />,
         }
     ]
}])



export default router