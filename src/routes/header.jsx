//import React from "react";
import { Link, Outlet} from 'react-router-dom';

export default function Header(){
    const nombre="qwerty";
    return(
        <>
            <ul>
                <li>
                    <Link to = {`/MyFormulario`}>Form</Link>
                </li>
            </ul>
            <Outlet context={[nombre]}/>
        
        </>
    )
}
