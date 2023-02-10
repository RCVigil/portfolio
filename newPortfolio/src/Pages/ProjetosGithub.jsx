import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Styles/Components/ProjetosGit.sass";
import moment from "moment";
import Loading from "./Loading";

const ProjetosGithub = () => {
  const [userGitHub, setUserGitHub] = useState([]);
  const [projectsGitHub, setProjectsGitHub] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const ENDPOINTRepos = "https://api.github.com/users/RCVigil/repos";
  const ENDPOINTUser = "https://api.github.com/users/RCVigil";

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
          console.log(data);
          setProjectsGitHub(data);
          setLoading(true);
        })
        .catch((error) => {
          setErrorMsg(error);
        });

      fetch(ENDPOINTUser, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setUserGitHub(data);
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
    <main className="divProjetoG container-fluid col-11 d-flex flex-column">
      <div className="tituloProjetos d-flex justify-content-center p-4">
        <h2 className="text-center text-wrap text-capitalize fs-1 fw-bolder fst-italic font-monospace text-decoration-none">
          Principais Projetos
        </h2>
      </div>

      <div 
        className="divMainProjetos d-flex col-11 flex-row w-full"
      >
        {
          <div className="d-flex col-3">
            {!loading ? (
              <Loading />
            ) : (
              <div className="divUserGit d-flex flex-column align-items-center p-2">
                <h1 className="h1Name text-lg-right lh-sm font-italic text-capitalize text-decoration-none text-monospace mt-4">
                  {userGitHub.name}
                </h1>

                <img
                  className="imgUser d-flex img-fluid col-2 align-self-center align-items-center mt-5 h-auto w-50"
                  src={userGitHub.avatar_url}
                  alt="Foto do github"
                />

                <p className="pBioGitUser card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {userGitHub.bio}
                </p>

                <hr />

                <h1 className=" pBioGitUser card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {!userGitHub.company ? (
                    <>
                      <p>Vamos conversar!</p>
                      <p>
                        Posso contribuir com o desenvolvimento de projetos para
                        sua empresa.
                      </p>
                      <p>Aqui você encontra todos meus contatos.</p>
                    </>
                  ) : (
                    `Trabalhando atualmente na empresa ${userGitHub.company}`
                  )}
                </h1>

                <hr />

                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {`Estou no GitHub desde`}
                </p>

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-5">
                  {experiency()}
                </h1>

                <hr />

                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {userGitHub.location}
                </p>

                <hr />

                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {`O último updated foi em:`}
                </p>

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-5 mb-5">
                  {`${moment(userGitHub.updated_at).format("DD / MM / YYYY")}`}
                </h1>
                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  Quer conhecer todos meus projetos?
                </p>
                <button
                // onClick={() => path.push('/projetosFull')}
                  className="btnReposit btn btn-outline-info"
                >
                  {/* <a
                    href={ProjetosFullGit}
                    target="_blank"
                  > */}
                  <Link
                  to='/projetosFull'
                  >
                    Repositório{" "}
                    <i className="bi bi-pc-display-horizontal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pc-display-horizontal"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                      </svg>
                    </i>
                  {/* </a> */}
                  </Link>
                </button>
              </div>
            )}
          </div>
        }
        {!loading && <Loading />}
        {
          <div className="divProjectGit">
            {!projectsGitHub ? (
              <Loading />
            ) : (
              projectsGitHub.map((proj, index) => {
                if (proj.private === false) {
                  if (proj.stargazers_count === 1) {
                    return (
                      <div className="divProjectMap" key={proj.id}>
                        <div className="divCards ">
                          <div className="cardHeader d-flex text-center flex-column ">
                            <h1 className="h1Name text-center text-wrap text-capitalize fs-4 fw-bolder fst-italic font-monospace text-decoration-none">
                              {proj.name}
                            </h1>
                            {/* <h1>
                            {proj.description}
                            </h1> */}

                            <div className="divCriadoP">
                              <p className="">{`Criado em :`}</p>

                              <p className="criadoP card-text card-subtitle">
                                {moment(proj.created_at).format("MM / YYYY")}
                              </p>
                              {!proj.homepage ? (
                                ""
                              ) : (
                                <button
                                  className="LinkProject btn btn-outline-primary rounded-pill"
                                >
                                  <a
                                    className=""
                                    href={`${proj.homepage}`}
                                    target="_blank"
                                  >
                                    <i className="bi bi-play-btn mx-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
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
                              )}
                            </div>
                          </div>

                          <hr className="hrLineProj" />

                          <div>
                            <p className="card-text">
                              A linguagem predominante é:
                            </p>
                            <h5 className="card-text">{`${proj.language}`}</h5>

                            <br />

                            <div>
                              <p className="card-footer">
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
                      </div>
                    );
                  }
                }
              })
            )}
          </div>
        }
      </div>
    </main>
  );
};

export default ProjetosGithub;
