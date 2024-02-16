import * as React from "react";

import { Link } from "react-router-dom";

import moment from "moment";

import Loading from "./Loading";

import useTypewriter from "react-typewriter-hook";

import fetchGitHubData from "../Service/GithubService";
import LanguageSeal from "../Utils/LanguageSeal/LanguageSeal";

import OnGoingProjectCarousel from "../Components/OnGoingProjectCarousel/OnGoingProjectCarousel";

import BodyPersonLeft from "../Components/BodyPersonLeft/BodyPersonLeft";

import "../Styles/Components/Loading.sass";
import "../Styles/Components/ProjetosGit.sass";

const ProjetosGithub = () => {
  const [projectsGitHub, setProjectsGitHub] = React.useState([]);

  const [userGitHub, setUserGitHub] = React.useState([]);

  const [errorMsg, setErrorMsg] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const [magicName, setMagicName] = React.useState(userGitHub?.bio || "");

  const [dataFetched, setDataFetched] = React.useState(false);

  const intervalRef = React.useRef();

  const magicNameMaker = useTypewriter(magicName);

  // Quando o userGitHub.bio for alterado, atualize magicName
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMagicName((prevMagicName) => userGitHub?.bio || prevMagicName);
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [userGitHub]);

  React.useEffect(() => {
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
      } catch (error) {
        setErrorMsg(error.toString());
      }
    };

    // fetchData();
    // Verifique se os dados já foram buscados
    if (projectsGitHub.length === 0 && userGitHub.length === 0 && !loading) {
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
          <div className="loadingProjetosGithub ">
            <div className="divUserGit">
              <BodyPersonLeft
                userGitHub={userGitHub}
                magicNameMaker={magicNameMaker}
              />
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
                      <div className={`divCards ${proj?.name}`} key={proj.id}>
                        <div className="cardHeader ">
                          <h1 className="h1NameProjetos">{proj.name}</h1>
                          <LanguageSeal topicos={proj.topics} />
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
                            <h1 className="descricaoProjeto">
                              {proj.description}
                            </h1>
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
