import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import log from "loglevel";

import "../Styles/Components/ProjetosGit.sass";
import "../Styles/Components/Loading.sass";
import moment from "moment";
import Loading from "./Loading";

import useTypewriter from "react-typewriter-hook";

const ProjetosGithub = () => {
  const [userGitHub, setUserGitHub] = useState([]);
  const [projectsGitHub, setProjectsGitHub] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [magicName, setMagicName] = useState("");
  const intervalRef = useRef();
  const magicNameMaker = useTypewriter(magicName);

  // Quando o userGitHub.bio for alterado, atualize magicName
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMagicName(userGitHub?.bio || "");
    }, 200);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [userGitHub]);

  const ENDPOINTRepos = import.meta.env.VITE_REACT_APP_ENDPOINT_REPOS;
  const ENDPOINTUser = import.meta.env.VITE_REACT_APP_ENDPOINT_USER;

  useEffect(() => {
    setTimeout(() => {
      fetch(ENDPOINTRepos, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Network response was not ok");
          }
          const contentType = resp.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            return resp.text().then((text) => {
              throw new Error(
                `Response is not a valid JSON. Received: ${text}`,
              );
            });
          }
          return resp.json();
        })
        .then((data) => {
          log.info(data);
          setProjectsGitHub(data);
          setLoading(true);
        })
        .catch((error) => {
          setErrorMsg(error.toString());
          log.error(error);
        });

      fetch(ENDPOINTUser, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          log.info(data);
          setUserGitHub(data);
          setLoading(true);
        })
        .catch((error) => {
          setErrorMsg(error);
        });
    }, 2000);
  }, []);

  const experiency = () => {
    const inicio = moment(userGitHub.created_at).format("MM / YYYY");
    return inicio;
  };

  return (
    <div className="divProjetoG">
      <div className="tituloProjetos">
        <h2 className="h2ProjetosGithub">Principais Projetos</h2>
      </div>

      <div className="divMainProjetos">
        {loading && (
          <div className="loadingProjetosGithub ">
            <div className="divUserGit">
              <h1 className="h1Name">{userGitHub.name}</h1>

              <img
                className="imgUser"
                src={userGitHub?.avatar_url}
                alt="Foto do github"
              />

              <p className="pBioGitUser magicMakerP">{magicNameMaker}</p>

              <hr />

              <h1 className=" pBioGitUser companyProjGithub">
                {!userGitHub.company ? (
                  <>
                    <p className="pProjetGithub pHeaderProjetGithub">
                      Vamos conversar!
                    </p>
                    <p className="pProjetGithub">
                      Posso contribuir com o desenvolvimento de projetos para
                      sua empresa.
                    </p>
                    <p className="pProjetGithub">
                      Aqui você encontra todos meus contatos.
                    </p>
                    <div className="imgDivProjSVG">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left-square"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="16"
                        // height="16"
                        fill="currentColor"
                        class="bi bi-person-lines-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  `Trabalhando atualmente na empresa ${userGitHub.company}`
                )}
              </h1>

              <hr />

              <div>
                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {`Estou no GitHub desde`}
                </p>

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-5">
                  {experiency()}
                </h1>
              </div>

              <hr />

              <div className="divLocationProjGithub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="16"
                  // height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {userGitHub.location}
                </p>
              </div>

              <hr />

              <div className="justify-content-center">
                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {`O último updated foi em:`}
                </p>

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-5 mb-5">
                  {`${moment(userGitHub.updated_at).format("DD / MM / YYYY")}`}
                </h1>
              </div>

              <div className="divRepProjGithub">
                <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  Quer conhecer todos meus projetos?
                </p>
                <button
                  // onClick={() => path.push('/projetosFull')}
                  className="btnReposit"
                >
                  {/* <a
                    href={ProjetosFullGit}
                    target="_blank"
                  > */}
                  <Link to="/projetosFull">
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
            </div>
          </div>
        )}

        {
          <div className="divProjectGit">
            {!loading || !projectsGitHub ? (
              <div className="renderLoading">
                <Loading />
              </div>
            ) : (
              projectsGitHub
                .filter(
                  (proj) =>
                    proj.private === false && proj.stargazers_count === 1,
                )
                .reduce((groups, proj, index) => {
                  if (index % 2 === 0) {
                    groups.push([proj]);
                  } else {
                    groups[groups.length - 1].push(proj);
                  }
                  return groups;
                }, [])
                .map((group, groupIndex) => (
                  <div className="divProjectMap" key={groupIndex}>
                    {group.map((proj, index) => (
                      <div className={`divCards`} key={proj.id}>
                        <div className="cardHeader ">
                          <h1 className="h1NameProjetos">{proj.name}</h1>
                          <div className="divCriadoP">
                            <p className="pCreatedProject">{`Criado em :`}</p>

                            <p className="criadoDataProj">
                              {moment(proj.created_at).format("MM / YYYY")}
                            </p>
                            {!proj.homepage ? (
                              ""
                            ) : (
                              <button className="LinkProject">
                                <a href={`${proj.homepage}`} target="_blank">
                                  <i className="bi bi-play-btn mx-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      className="svgPlayProject"
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
                          <h1 className="descricaoProjeto">
                            {proj.description}
                          </h1>
                        </div>

                        <hr className="hrLineProj" />

                        <div className="divFooterProjeto">
                          <div className="lingPredominateProjeto">
                            <p className="card-footer-projetoGit">
                              A linguagem predominante é:
                            </p>
                            <h5 className="card-text">{`${proj.language}`}</h5>
                          </div>

                          <div className="divButtonProjetos">
                            <p className="card-footer-projetoGit">
                              {`Quer conhecer mais sobre este projeto?`}
                            </p>

                            <button className="btnProjetoGithub">
                              <a href={`${proj.svn_url}`} target="_blank">
                                Clique aqui!
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default ProjetosGithub;
