import * as React from "react";

import moment from "moment";

import Loading from "./Loading";

import fetchGitHubData from "../Service/GithubService";
import LanguageSeal from "../Utils/LanguageSeal/LanguageSeal";

import OnGoingProjectCarousel from "../Components/OnGoingProjectCarousel/OnGoingProjectCarousel";

import BodyPersonLeft from "../Components/BodyPersonLeft/BodyPersonLeft";

import usePortfolioContext from "../Context/usePortfolioContext";

import "../Styles/Components/Loading.sass";
import "../Styles/Components/ProjetosGit.sass";

const ProjetosGithub = () => {
  const {
    projectsGitHub,
    setProjectsGitHub,
    conectedUserGitHub,
    setConectedUserGitHub,
  } = usePortfolioContext();

  const [userGitHub, setUserGitHub] = React.useState([]);

  const [errorMsg, setErrorMsg] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const [dataFetched, setDataFetched] = React.useState(false);

  const fetchData = async () => {
    if (dataFetched) {
      return;
    }

    try {
      const { repos, user } = await fetchGitHubData(); // Use o serviço

      setProjectsGitHub(repos);
      setUserGitHub(user);
      setLoading(true);
      setDataFetched(true);
      setConectedUserGitHub(true);
    } catch (error) {
      setErrorMsg(error.toString());
      return errorMsg;
    }
  };

  React.useEffect(() => {
    if ((!projectsGitHub || !userGitHub || !loading) && !conectedUserGitHub) {
      fetchData();
    }
  }, [projectsGitHub, userGitHub, loading]);

  return (
    <div className="divProjetoG" id="PProjetos">
      <div className="tituloProjetos">
        <h2 className="h2ProjetosGithub">Principais Projetos</h2>
      </div>

      <div className="content__Carousel__ProjetosGitHub">
        <OnGoingProjectCarousel />
      </div>

      <div className="divMainProjetos">
        {loading && (
          <div className="loadingProjetosGithub">
            <div className="divUserGit">
              <BodyPersonLeft userGitHub={userGitHub} />
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
                .filter((el) => el.name !== "shopping_list_Angular")
                .reduce((groups, proj, index) => {
                  if (index % 2 === 0) {
                    groups.push([proj]);
                  } else {
                    groups[groups.length - 1].push(proj);
                  }
                  return groups;
                }, [])
                .map((group, groupIndex) => (
                  <div
                    className={`divProjectMap content__2Cards${
                      groupIndex + 1
                    }__ProjetosGithub`}
                    key={groupIndex}
                  >
                    {group.map((proj, index) => (
                      <div
                        className={`divCards ${proj?.name} content__Cards${
                          index + 1
                        }__ProjetosGithub`}
                        key={proj.id}
                      >
                        <div className="cardHeader ">
                          <h1 className="h1NameProjetos">{proj.name}</h1>
                          <div className="content__LanguageSeal__ProjetosGithub">
                            <LanguageSeal topicos={proj.topics} />
                          </div>
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
                          <div className="h1DescriptionPGH">
                            <h3 className="descricaoProjeto">
                              {proj.description}
                            </h3>
                          </div>
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
