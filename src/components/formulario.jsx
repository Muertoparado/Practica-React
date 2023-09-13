//import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';


export default function Formulary({titulo}) {
    const {FormularioId} = useParams();
    const [nombre] = useOutletContext();

    return (
        <>
        <h1>{titulo} {nombre}</h1>
        <p>{FormularioId}</p>
        </>
    )
}

Formulary.defaultProps ={
    titulo :"formulario 2"

}