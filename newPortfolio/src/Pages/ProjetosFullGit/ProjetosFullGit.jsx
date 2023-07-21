import React, { useState, useEffect } from "react";

import moment from "moment";

import "./ProjetosFullGit.sass";

import Loading from "../Loading";

import goHome from "../../images/goHome.svg";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import AsideLeft from "../../Components/Aside-Left";
import Footer from "../../Components/Footer";
import ScrollToTopButton from "../../Utils/ScrollToTopButtn";

const ProjetosFullGit = () => {
  const [projectsGitHub, setProjectsGitHub] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const ENDPOINTRepos = "https://api.github.com/users/RCVigil/repos";

  useEffect(() => {
    setTimeout(() => {
      fetch(ENDPOINTRepos, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjectsGitHub(data);
          setLoading(true);
        })
        .catch((error) => {
          setErrorMsg(error);
        });
    }, 300);
  }, []);

  const experiency = () => {
    const inicio = moment(userGitHub.created_at).format("MM / YYYY");
    return inicio;
  };

  return (
    <div className="firstDivFullGit">
      <Header />
      <div className="asideLeft">
        <AsideLeft />
      </div>
      <h2 className="h2ProjectFullGit">Todos Projetos</h2>

      <div className="divMainProjetosF">
        {!loading ? (
          <Loading />
        ) : (
          <div className="divProjectF">
            {!projectsGitHub ? (
              <div className="loadingProjetosFullgit">
                <Loading />
              </div>
            ) : (
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
                                <h1 className="h1StacksPFG mb-5 mt-5 fs-2 text-capitalize">
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
                                  {moment(proj.created_at).format("MM / YYYY")}
                                </p>
                              </div>
                            </div>
                          </div>

                          <hr className="text-primary" />

                          <div>
                            {!proj.language ? (
                              ""
                            ) : (
                              <div className="d-flex justify-content-center m-2">
                                <p className="card-text text-info">
                                  A linguagem predominante é:
                                </p>
                                <h5 className="card-text text-light ms-3">{`${proj.language}`}</h5>
                              </div>
                            )}

                            <br />

                            <p className="text-light">{proj.description}</p>

                            <br />

                            <div className="mt-3">
                              <p className="card-footer text-light">
                                {`Quer conhecer mais sobre este projeto?`}
                              </p>

                              <button className="btn btn-outline-primary">
                                <a href={`${proj.svn_url}`} target="_blank">
                                  Clique aqui!
                                </a>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="goHomeDiv col-12">
                          <div className="aplicPlay col-6 d-flex justify-content-center">
                            {!proj.homepage ? (
                              ""
                            ) : (
                              <div className="d-flex align-items-center align-content-center flex-column justify-content-center">
                                <p className="pPlay text-light">{`Quer ver a aplicação rodando, é so clicar no play`}</p>
                                <button className="LinkProjectF btn btn-outline-primary rounded-pill">
                                  <a
                                    className=""
                                    href={`${proj.homepage}`}
                                    target="_blank"
                                  >
                                    <i className="bi bi-play-btn mx-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="29"
                                        height="29"
                                        fill="currentColor"
                                        className="bi bi-play-btn"
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

                          <div className="imageGoHome col-6 d-flex justify-content-end">
                            {/* https://loading.io/ */}
                            <Link to="/">
                              <img src={goHome} />
                              <h1>{`Go Home`}</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            )}
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
