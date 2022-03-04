import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParamentro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card Card titulo="#13 - (Desafio) Mega Sena" color="#74989F">
                <Mega qtde={6} />
            </Card>

            <Card Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} />
            </Card>

            <Card
                Card
                titulo="#11 - Componente Controlado (Input)"
                color="#E45F56"
            >
                <Input />
            </Card>

            <Card Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card Card titulo="#08 - Rederização Condicional" color="#982395">
                <UsuarioInfo usuario={{ nome: "Carlos" }} />
                <UsuarioInfo />
                <ParOuImpar numero={20} />
            </Card>

            <Card Card titulo="#07 - (Desafio) Repetição" color="#F04CF5">
                <TabelaProdutos />
            </Card>

            <Card Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - (Desafio) Aleatorio" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Paramentro" color="#E8B71A">
                <ComParamentro
                    titulo="Situação do Aluno"
                    aluno="Paulo Augusto"
                    nota={4}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);
