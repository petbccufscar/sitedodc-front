import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarraLateral from "../components/inicio/components/BarraLateral";
import BotoesArea from "../components/inicio/components/BotoesArea";


import {
  NoticiaCard,
  NoticiasContainer,
  NoticiaLoader,
} from "../components/noticias";
import {
  LinkRapido,
  LinksRapidosContainer,
  LinksRapidosLoader,
} from "../components/links-rapidos";
import {
  Evento,
  EventosContainer,
  EventosLoader,
} from "../components/eventos";
import {
  Carousel,
  CarouselBanner,
} from "../components/carousel";

import { Query } from "react-apollo";
import { GET_INICIO } from "../utils/queries";
import NoticiasArea from "../components/inicio/components/NoticiasArea";
import BotaoItem from "../components/inicio/components/BotaoItem";
import BannerArea from "../components/inicio/components/BannerArea";

class Inicio extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Query query={GET_INICIO}>
          {({ loading, error, data }) => {
            return (
              <React.Fragment>
                <div className="row mb-4 mt-4 rounded bg-primary sm-hide">
                  <BannerArea>
                    <Carousel>
                    <CarouselBanner
                            banner={"/images/banner1.jpg"}
                            texto="Departamento de Computação conta com 6 
                            laboratórios de ensino e mais de 20 laboratórios de pesquisa."
                            creditos="Fotografia: Guilherme Rabello"
                            active={true}
                          />
                    <CarouselBanner
                            banner={"/images/banner2.jpg"}
                            texto="Engenharia de Computação da UFSCar obtém 
                            nota máxima no ENADE 2017."
                            creditos="Fotografia: Guilherme Rabello"
                            active={false}
                          />
                    <CarouselBanner
                            banner={"/images/banner3.jpg"}
                            texto="Bacharelado em Ciência da Computação recebe 5 estrelas 
                            no último Guia do Estudante."
                            creditos="Fotografia: Guilherme Rabello"
                            active={false}
                          />
                    <CarouselBanner
                            banner={"/images/banner-secomp.jpg"}
                            texto="Mais de 3.600 alunos formados 
                            no Departamento de Computação."
                            creditos="Fotografia: SECOMP"
                            active={false}
                          />
                    </Carousel>
                  </BannerArea>
                  <BotoesArea>
                      <BotaoItem to="/area-aluno">
                          <FontAwesomeIcon icon="user-graduate" className="d-inline-block mr-3" />
                          Área do Aluno
                      </BotaoItem>
                      <BotaoItem to="/area-docente" className="border-top border-bottom">
                          <FontAwesomeIcon icon="chalkboard-teacher" className="d-inline-block mr-3" />
                          Área do Docente
                      </BotaoItem>
                      <BotaoItem to="/area-visitante">
                          <FontAwesomeIcon icon="user" className="d-inline-block mr-4" />
                          Área do Visitante
                      </BotaoItem>
                    </BotoesArea>     
                </div>

                <div className="mb-4 mt-4 rounded bg-primary sm-show">
                      <BotaoItem to="/area-aluno">
                          <FontAwesomeIcon icon="user-graduate" className="d-inline-block mr-3" />
                          Área do Aluno
                      </BotaoItem>
                      <BotaoItem to="/area-docente" className="border-top border-bottom">
                          <FontAwesomeIcon icon="chalkboard-teacher" className="d-inline-block mr-3" />
                          Área do Docente
                      </BotaoItem>
                      <BotaoItem to="/area-visitante">
                          <FontAwesomeIcon icon="user" className="d-inline-block mr-4" />
                          Área do Visitante
                      </BotaoItem>
                </div>
                
                <div className="row inicio" id="conteudo">
                  <NoticiasArea>
                    <NoticiasContainer more={false}>
                      {loading ? (
                        <NoticiaLoader />
                      ) : error ? (
                        `Error! ${error.message}`
                      ) : (
                        data.noticias.map((noticia, index) => (
                          <NoticiaCard
                            id={noticia._id}
                            title={noticia.Titulo}
                            description={noticia.Descricao}
                            imagem={noticia.Imagem}
                            imageAlt={noticia.Imagem_texto_alternativo}
                            date={noticia.createdAt}
                          />
                        ))
                      )}
                    </NoticiasContainer>
                  </NoticiasArea>
                  <BarraLateral>
                    <EventosContainer>
                      {loading ? (
                        <EventosLoader />
                      ) : error ? (
                        `Error! ${error.message}`
                      ) : (
                        data.eventos.sort(compare).map((evento, index) => (
                          <Evento
                            key={index}
                            titulo={evento.Titulo}
                            data={evento.Data}
                            local={evento.Local}
                          />
                        ))
                      )}
                    </EventosContainer>
                    <LinksRapidosContainer>
                      {loading ? (
                        <LinksRapidosLoader />
                      ) : error ? (
                        `Error! ${error.message}`
                      ) : (
                        data.links.map((link, index) => (
                          <LinkRapido
                            link={link.Link}
                            alt={link.Texto_alternativo}
                            imagem={`${process.env.REACT_APP_API_URL}/${
                              link.Imagem.url
                            }`}
                            key={index}
                          />
                        ))
                      )}
                    </LinksRapidosContainer>
                  </BarraLateral>
                </div>
              </React.Fragment>
            );
          }}
        </Query>
      </main>
    );
  }
}

function compare(a, b) {
  if ( a.Data > b.Data ){ return -1;}
  else if ( a.Data < b.Data ){ return 1;}
  return 0;
}

export default Inicio;
