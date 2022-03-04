import React from "react";

export default (props) => {

    const max = 70
    const min = 50
    const gerarIdade = () => parseInt(Math.random() * (max-min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>

            <button onClick={(e) => props.quandoClicar("Joao", gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    );
};
