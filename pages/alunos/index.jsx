import React from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Link from "next/link";

import { Query } from "react-apollo";
import { GET_INTERVALO } from "../../utils/queries";

const generateLinkToYear = (year, curso) => {
  return (
    <Link
      href={`/alunos/${curso}/${year}`}
    >
      <a className="ano-aluno btn no-decoration mt-3 mx-2 btn-link hoverable">
      {year}
      </a>
    </Link>
  );
};

const Curso = ({ name, links, classnames = "" }) => {
  return (
    <div className={classnames}>
      <h4>{name}</h4>
      <div className="row" style={{ columnCount: 8 }}>
        {links}
      </div>
    </div>
  );
};

const AnosAlunos = () => {


  return (
    <React.Fragment>
      <Breadcrumbs>
        <Breadcrumb endereco="/">Início</Breadcrumb>
        <Breadcrumb bold>Alunos</Breadcrumb>
      </Breadcrumbs>
      <main role="main" className="container" id="conteudo">
        <Query query={GET_INTERVALO}>
          {({ loading, error, data }) => {
            if (loading || error) { return <div />; }
            const currentYear = new Date().getFullYear();
            const startYearBCC = 1975;
            const startYearENC = 1992;
            const yearsBCC = currentYear - startYearBCC + 1;
            const yearsENC = currentYear - startYearENC + 1;

            let bccLinks = Array.apply(null, { size: yearsBCC });
            let encLinks = Array.apply(null, { size: yearsENC });

            for (let year = currentYear, i = 0; year >= startYearBCC; year-- , i++) {
              bccLinks[i] = generateLinkToYear(year, "bcc");
            }

            for (let year = currentYear, i = 0; year >= startYearENC; year-- , i++) {
              encLinks[i] = generateLinkToYear(year, "enc");
            }

            return (
              <React.Fragment>
                <Curso
                  name="Bacharelado em Ciência da Computação"
                  links={bccLinks}
                />
                <Curso
                  name="Engenharia da Computação"
                  links={encLinks}
                  classnames="mt-4"
                />
              </React.Fragment>
            );
          }}
        </Query>
      </main>
    </React.Fragment>
  );
};

export default AnosAlunos;
