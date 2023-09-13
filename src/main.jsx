import React from "react";
import { ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Header from "./routes/header";
import Formulary from "./components/formulario";
import error from "./routes/error404";

const root = createBrowserRouter([
    {
        path:"/",
        element:<Header/>,
        children:[
            {
                path: "myFormulario/:FormularioId?",
                element: <Formulary titulo="hola" />
            }
        ],
        errorElement: <error/>
    }
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <RouterProvider router ={root}/>
    </React.StrictMode>
)
