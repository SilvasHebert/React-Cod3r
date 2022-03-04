import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {

    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    // nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
       setNome(nomeParam)
       setIdade(idadeParam)
       setNerd(nerdParam)
    }

    return (
        <div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{nerd ? "Verdadeiro" : "False"} </span>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}