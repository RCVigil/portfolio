import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import "../Styles/Components/ProjetosGit.sass";
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
    <main className="divProjetoG">
      <div className="tituloProjetos">
        <h1 className="">Principais Projetos</h1>
      </div>
      <div className="divMainProjetos">
        {
          <div className="d-flex col-4">
            {!loading ? (
              <Loading />
            ) : (
              <div className="divUserGit d-flex flex-column align-items-center p-2 mx-5">
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

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {`Estou no GitHub desde`}
                </h1>

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-4">
                  {experiency()}
                </h1>

                <hr />

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {userGitHub.location}
                </h1>

                <hr />

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
                  {`O último updated foi em:`}
                </h1>

                <h1 className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-4 mb-5">
                  {`${moment(userGitHub.updated_at).format("DD / MM / YYYY")}`}
                </h1>
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
                      <div
                        className="divProjectMap"
                        key={proj.id}
                      >
                        <div className="divCards">
                          <h1 className="h1Name text-capitalize">
                            {proj.name}
                          </h1>

                          <div className="cardDescription">
                            {/* <h1>
                        {proj.description}
                        </h1> */}

                            <div className="divCriadoP">
                              <p className="">
                                {`Criado em :`}
                              </p>

                              <p className="criadoP card-text card-subtitle">
                                {moment(proj.created_at).format("MM / YYYY")}
                              </p>
                            </div>

                            <hr
                              className="hrLineProj"
                            />

                            <div>
                              <p className="card-text">
                                A linguagem predominante é:
                              </p>
                              <h5 className="card-text">{`${proj.language}`}</h5>
                            </div>

                            <br />

                            <div>
                              <p className="card-footer">
                                {`Quer conhecer mais sobre este projeto?`}
                              </p>

                              <button className="btn btn-outline-primary">
                                <a
                                  href={`${proj.svn_url}`}
                                  target="_blank">
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
