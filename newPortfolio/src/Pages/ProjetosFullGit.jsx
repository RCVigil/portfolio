import moment from "moment";
import React, { useState, useEffect } from "react";
import "../Styles/Components/ProjetosFullGit.sass";
import Loading from "./Loading";

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
          console.log(data);
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
    <div>
      <div className="tituloProjetos d-flex justify-content-center p-4">
        <h2 className="text-center text-wrap text-capitalize fs-1 fw-bolder fst-italic font-monospace text-decoration-none">
          Todos Projetos
        </h2>
      </div>

      <div className="divMainProjetos d-flex flex-row w-full">
        {!loading && <Loading />}
        {
          <div className="divProjectGit">
            {!projectsGitHub ? (
              <Loading />
            ) : (
              projectsGitHub.map((proj, index) => {
                if (proj.private === false) {
                  return (
                    <div className="container-fluid border border-4 rounded m-4 p-5 border-primary" key={proj.id}>
                      <div className="divCards">
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
                              <button className="LinkProject btn btn-outline-primary rounded-pill">
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

                        <hr className="text-primary" />

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
              })
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default ProjetosFullGit;
