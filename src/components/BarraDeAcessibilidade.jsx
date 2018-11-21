import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Badge from "./Badge";
const BarraDeAcessibilidade = ({ }) => (
    <div className="text-light bg-dark container-fluid ">
        <div className="container">
            <div
                className="d-flex justify-content-between align-items-center py-1"
                id="acessibilidade"
            >
                <ul id="atalhos" className="list-inline mb-0 d-none d-lg-block">
                    <Badge link="#">
                        <span className="d-none d-sm-inline-block">Ir para topo</span>
                    </Badge>
                    <Badge link="#conteudo">
                        <span className="d-none d-sm-inline-block">Ir para conteudo</span>
                    </Badge>
                    <Badge link="#rodape">
                        <span className="d-none d-sm-inline-block">Ir para rodapé</span>
                    </Badge>
                </ul>
                <ul id="botoes" className="list-inline mb-0 ml-auto">
                    <Badge link="acessibilidade">
                        <FontAwesomeIcon icon="universal-access" className="mr-1" />
                        <span className="d-none d-sm-inline-block">Acessibilidade</span></Badge>
                    <Badge link="#">
                        <FontAwesomeIcon icon="adjust" className="mr-1" />
                        <span className="d-none d-sm-inline-block">Alto contraste</span></Badge>
                    <Badge link="mapa">
                        <FontAwesomeIcon icon="globe" className="mr-1" />
                        <span className="d-none d-sm-inline-block">Mapa do site</span></Badge>
                </ul>
            </div>
        </div>
    </div>
);

export default BarraDeAcessibilidade;
