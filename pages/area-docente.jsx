import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../components/Breadcrumbs";
import Card, { CardBody } from "../components/Card";
import Link from "next/link";

const data = {
  Sistemas: [
    {
      title: "SIGA",
      subTitle: "Sistema Integrado de Gestão Acadêmica",
      link: "https://siga.ufscar.br",
    },
    {
      title: "SAGUI",
      subTitle: "Sistema de Apoio à Gestão Universitária Integrada (SAGUI)",
      link: "https://sistemas.ufscar.br/sagui/",
    },
    {
      title: "Proex Web",
      subTitle: "Pró-reitoria de extensão",
      link: "http://www.proex.ufscar.br",
    },
    {
      title: "Reserva de salas",
      subTitle: "Ferramenta para reserva de salas no departamento",
      link: "http://reserva.dc.ufscar.br",
    },
  ],
  Documentos: [
    {
      title: "Afastamento",
      subTitle: "Formulário de afastamento.",
      link: "http://www3.dc.ufscar.br:8080/Afastamento/",
    },
    {
      title: "Agendamento de bancas",
      subTitle: "Formulário para agendamento de bancas",
      link: "http://www2.dc.ufscar.br/inscricao/index.jsp?form=ppgcc/AprovacaoBanca",
    },
  ],
  Suporte: [
    {
      title: "Criação de salas no Moodle",
      subTitle: "Guia de como criar salas no Moodle",
      link: "https://ava.ead.ufscar.br/siscad/",
    },
    {
      title: "Sistema de suporte",
      subTitle: "Contato com o suporte do DC.",
      link: "http://suporte.dc.ufscar.br/otrs/customer.pl",
    },
    {
      title: "Periódicos",
      subTitle: "Acesso a periódicos disponíveis",
      link: "http://www.periodicos.capes.gov.br/",
    },
    {
      title: "Eduroam",
      subTitle: "Como acessar a rede Eduroam",
      link:
        "http://www.sin.ufscar.br/servicos/conectividade/rede-sem-fio-eduroam-1",
    },
  ],
};

class AreaDocentes extends Component {
  renderLink(link, title, subTitle) {
    const content = (
      <React.Fragment>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
      </React.Fragment>
    );
    const isExternal = link.search("^[/#]") === -1;

    return isExternal ? (<a href={link}>{content}</a>) : (<Link href={link}>{content}</Link>);
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Área do docente</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          {Object.keys(data).map((section) => (
            <React.Fragment>
              <h4>{section}</h4>
              <div className="card-deck mb-4">
                {data[section].map((card) => (
                  <Card className="hoverable">
                    <CardBody>
                      {this.renderLink(card.link, card.title, card.subTitle)}
                    </CardBody>
                  </Card>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AreaDocentes;
