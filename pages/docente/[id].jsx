import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DocenteLoader from "../../components/Docentes/DocenteLoader";
import { Query } from "react-apollo";
import { ImageLoader } from "../../components/image-loader";
import PropTypes from "prop-types";
import { useRouter } from 'next/router'
import { GET_DOCENTE } from "../../utils/queries";
import EmailsImage from "../../utils/emails";

function Docente() {
  const router = useRouter()
  const { id } = router.query

  const listAreas = (areas) => {
    let list = areas.map((area, index) => (
      <span key={index}>{area.Nome}; </span>
    ));
    return list;
  }

    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/Docentes">Docentes</Breadcrumb>
          <Breadcrumb bold>Visualizando docente</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <Query
            query={GET_DOCENTE}
            variables={{ id }}
          >
            {({ loading, error, data }) => {
              if (loading) { return <DocenteLoader />; }
              if (error) { return `Error! ${error.message}`; }

              return (
                <div className="row">
                  {data.docente.Foto && (
                    <div
                      className="col-sm col-lg-3 col-md-4 mb-3 d-flex justify-content-center"
                      id="docente-foto"
                    >
                      <ImageLoader
                        classnames="img-docente rounded-circle"
                        src={`${process.env.REACT_APP_API_URL}/${data.docente.Foto.url}`}
                        alt="imagem do docente"
                      />
                    </div>
                  )}
                  <div
                    className="col-sm col-lg-9 col-md-8"
                    id="docente-conteudo"
                  >
                    <h3 className="text-center text-sm-left">
                      {data.docente.Nome}
                    </h3>
                    <h5 className="text-muted text-center text-sm-left">
                      {data.docente.Tipo + "-" + data.docente.Horas + "h/DE"}
                    </h5>
                    <p className="text-justify">{data.docente.Descricao}</p>
                    <p>
                      <FontAwesomeIcon
                        icon="graduation-cap"
                        className="d-inline-block mr-2"
                      />
                      Nível: {data.docente.Nivel === "Pos" ? "Pós Doutorado" : data.docente.Nivel}
                    </p>
                    {data.docente.Areas &&
                      data.docente.Areas.length > 0 &&
                      (<p className="card-text">
                        <FontAwesomeIcon
                          icon="microscope"
                          className="d-inline-block mr-2"
                        />
                        Áreas: {listAreas(data.docente.Areas)}
                      </p>)}
                    <p>
                      <FontAwesomeIcon
                        icon="envelope"
                        className="d-inline-block mr-2"
                      />
                      Email: <img src={EmailsImage.getEmailImagePath(data.docente.Email)} alt={"e-mail do docente " + data.docente.Nome} />
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon="phone"
                        className="d-inline-block mr-2"
                      />
                      Telefone: {data.docente.Telefone}
                    </p>
                    <a href={data.docente.Lattes} className="mr-4">
                      <FontAwesomeIcon
                        icon="globe-americas"
                        className="d-inline-block mr-2"
                      />
                      Lattes
                    </a>
                    <a href={data.docente.Site} className="mr-4">
                      <FontAwesomeIcon
                        icon="globe-americas"
                        className="d-inline-block mr-2"
                      />
                      Página Pessoal
                    </a>
                  </div>
                </div>
              );
            }}
          </Query>
        </div>
      </React.Fragment>
    );
}

Docente.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

export default Docente;