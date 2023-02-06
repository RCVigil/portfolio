import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";

const ProjetosGithub = () => {
  const [userGitHub, setUserGitHub] = useState([]);
  const [projectsGitHub, setProjectsGitHub] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const ENDPOINTRepos = "https://api.github.com/users/RCVigil/repos";
  const ENDPOINTUser = "https://api.github.com/users/RCVigil";

  useEffect(() => {
    // debugger;
    getApiGit();
    getApiRepositGit();
    console.log(
      "Chamando o estado projectsGitHub dentro do useEffect ",
      projectsGitHub
    );
  }, []);

  const getApiRepositGit = async () => {
    const responseProjs = await axios
      .get(ENDPOINTRepos, {})
      .then(function (response) {
        console.log("Response data do Axios", response.data);
        console.log("O estado ProjectsGitHub", projectsGitHub);
      })
      .catch(function (error) {
        setErrorMsg("GitHub temporariamente fora de serviço");
        console.log(error);
      });
    console.log(responseProjs);
  };

  async function getApiGit() {
    await axios
      .get(ENDPOINTUser, {})
      .then(function (response) {
        // debugger;
        setUserGitHub(response.data);

        console.log(response);
      })
      .catch(function (error) {
        setErrorMsg("GitHub temporariamente fora de serviço");
        console.log(error);
      });
  }

  const experiency = () => {
    const inicio = moment(userGitHub.created_at).format("MM / YYYY");
    return inicio;
  };

  const ProjectFull = () => {
    if (projectsGitHub === undefined) {
      console.log("Entrou no undefined");
      return <h2>{errorMsg}</h2>;
    }

    if (projectsGitHub === []) {
      console.log("Entrou no []");
      return <h2>Loading...</h2>;
    }

    projectsGitHub.map((proj, index) => {
      if (proj.private === true) {
        return (
          <div className="divProjectMap" key={proj.id}>
            <h1>{index}</h1>
            <h1>{proj.name}</h1>
            <h1>{proj.description}</h1>
            <h1>{`Criado em : ${moment(proj.created_at).format(
              "MM / YYYY"
            )}`}</h1>
            <h1>{`A linguagem predominante é: ${proj.language}`}</h1>
            <h1>{`Quer conhecer este projeto?`}</h1>
            <h1>{`Clique aqui! ${(<a>`${proj.svn_url}`</a>)}`}</h1>
            {/* {console.log(index, proj.name)} */}
          </div>
        );
      }
    });
  };

  return (
    <div className="divProjetoG container-fluid h-auto">
      {
        <div className="d-flex divProjectGit column px-3">
          {!userGitHub ? (
            <button
              className="btn btn-primary text-warning"
              type="button"
              disabled
            >
              <span className="spinner-border spinner-border-sm">
                Loading...
              </span>
            </button>
          ) : (
            <div className="d-flex flex-column col-4 align-items-center border border-info">
              <h1
                className="text-lg-right lh-sm font-italic text-capitalize text-decoration-none text-monospace mt-4"
              >
                {userGitHub.name}
              </h1>

              <img
                className="d-flex img-fluid col-2 align-self-center align-items-center p-2 mt-5 h-auto w-50"
                src={userGitHub.avatar_url}
                alt="Foto do github"
              />

              <p
                className="pBioGitUser card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4"
              >
                {console.log(userGitHub.bio)}
              </p>

              <h1
                className=" pBioGitUser card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4"
              >
                {!userGitHub.company
                  ? `Você pode me contratar que estou à disposição, vamos conversar? 
            Aqui você encontra todos meus contatos`
                  : `Trabalhando Atualmente na empresa ${userGitHub.company}`}
              </h1>

              <h1
                className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4"
              >
                {`Estou no GitHub desde`}
              </h1>

              <h1
                className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-4"
              >
                {experiency()}
              </h1>

              <h1
                className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4"
              >
                {userGitHub.location}
              </h1>

              <h1
                className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4"
              >
                {`O último updated foi em:`}
              </h1>

              <h1
                className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-4 mb-5"
              >
                {`${moment(userGitHub.updated_at).format(
                  "DD / MM / YYYY"
                  )}`}
              </h1>
            </div>
          )}
        </div>
      }
      ProjectFull()
      <h3>{errorMsg}</h3>
    </div>
  );
};

export default ProjetosGithub;
