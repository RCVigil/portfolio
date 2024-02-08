import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import moment from "moment";

import Loading from "../Loading";

import AsideLeft from "../../Components/Aside-Left";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ScrollToTopButton from "../../Utils/ScrollToTopButtn";

import fetchGitHubProjectData from "../../Service/gitHubProjectService";

import "./ProjetosFullGit.sass";

const ProjetosFullGit = () => {
  const [projectsGitHub, setProjectsGitHub] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  console.error(errorMsg);
  const [loading, setLoading] = useState(false);

  const ENDPOINTRepos = "https://api.github.com/users/RCVigil/repos";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubProjectData(ENDPOINTRepos);
        setProjectsGitHub(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter repositórios:", error);
        setErrorMsg(error.message || "Ocorreu um erro desconhecido");
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  const experience = () => {
    const inicio = moment(userGitHub.created_at).format("MM / YYYY");
    return inicio;
  };

  const { scrollYProgress } = useScroll();

  // Define uma media query para telas de celular
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)", // Define aqui o tamanho máximo para considerar como celular
  });

  return (
    <div className="firstDivFullGit">
      <Header />
      {!isMobile && (
        <div className="asideLeft">
          <AsideLeft />
        </div>
      )}
      <h2 className="h2ProjectFullGit">Todos Projetos</h2>

      <div className="divMainProjetosF">
        {!loading ? (
          <Loading />
        ) : (
          <div className="Container__ProjetosFullGit">
            <h3>{`Total de projetos públicos: ${projectsGitHub.length}`}</h3>
            <div className="divProjectF">
              {!projectsGitHub ? (
                <div className="loadingProjetosFullgit">
                  <Loading />
                </div>
              ) : (
                projectsGitHub &&
                projectsGitHub.map((proj) => {
                  if (proj.private === false) {
                    return (
                      <div className="divRenderPFG" key={proj.id}>
                        <div className="container-fluid col-8 border border-4 rounded mt-4 pt-5 border-primary">
                          <div className="divCards">
                            <div className="cardHeader">
                              <h1 className="h1NamePFG">{proj.name}</h1>
                              <div className="stackCretedAsPFG">
                                <div className="divTopicosPFG ">
                                  <h1 className="h1StacksPFG">
                                    Stacks usadas neste projeto:
                                  </h1>
                                  <div className="divStacks">
                                    {proj.topics.map((topic, index) => {
                                      return (
                                        <ul
                                          key={index}
                                          className="list-group-PFG"
                                        >
                                          <li className="list-group-item-stacksPFG">
                                            {topic}
                                          </li>
                                        </ul>
                                      );
                                    })}
                                  </div>
                                </div>
                                <div className="divCriadoP d-flex justify-content-center mt-4">
                                  <p className="cardCriadoPFG">Criado em :</p>

                                  <p className="dataCriadoPFG">
                                    {moment(proj.created_at).format(
                                      "MM / YYYY"
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <hr className="hrDivisory" />

                            <div className="divMainCardPFG">
                              {!proj.language ? (
                                ""
                              ) : (
                                <div className="predominanteDivPFG">
                                  <p className="predominantePPFG">
                                    A linguagem predominante é:
                                  </p>
                                  <h5 className="predominanteH5PFG">{`${proj.language}`}</h5>
                                </div>
                              )}

                              <br />

                              <div className="divPDescricaoPFG">
                                <p className="pDescricaoPFG">
                                  {proj.description}
                                </p>
                              </div>

                              <br />

                              <div className="divCodigoPFG">
                                <p className="pCodigoPFG">
                                  {`Quer conhecer o código deste projeto?`}
                                </p>

                                <button className="btnCodigoPFG">
                                  <a
                                    className="aCodigoPFG"
                                    href={`${proj.svn_url}`}
                                    target="_blank"
                                  >
                                    Clique aqui!
                                  </a>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="goHomeDiv">
                            <div className="aplicPlay">
                              {!proj.homepage ? (
                                ""
                              ) : (
                                <div className="divPlayPFG">
                                  <p className="pPlayPFG">
                                    Quer ver a aplicação rodando, é so clicar no
                                    play
                                  </p>
                                  <button className="LinkProjectF btn btn-outline-primary rounded-pill">
                                    <a
                                      className="aPlayPFG"
                                      href={`${proj.homepage}`}
                                      target="_blank"
                                    >
                                      <i className="bi bi-play-btn mx-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          // width="50"
                                          // height="50"
                                          fill="currentColor"
                                          id="PlayIconPFG"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                        </svg>
                                      </i>
                                    </a>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              )}
            </div>
          </div>
        )}
      </div>
      <div className="firstFooter">
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ProjetosFullGit;
