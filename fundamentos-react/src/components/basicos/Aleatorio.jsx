import React from 'react';

export default (props) => {

    const {min, max} = props;
    
    let numeroAleatorio = Math.random() * (max - min + 1) + min
    
    return (
        <div>
            <h2>Numero Aleatorio</h2>
            <p>Valor Mínimo: {min}</p>  
            <p>Valor Máximo: {max}</p>
            <p>Resultado: {parseInt(numeroAleatorio)}</p>
        </div>
    )
}