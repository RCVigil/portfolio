import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

const ProjetosGithub = () => {
  const [userGitHub, setUserGitHub] = useState([]);
  const [projectsGitHub, setProjectsGitHub] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // debugger;
    getApiGit();
    getApiRepositGit();
    ProjectFull();
  }, []);

  function getApiGit() {
    const ENDPOINT = "https://api.github.com/users/RCVigil";

    axios
      .get(ENDPOINT, {})
      .then(function (response) {
        // debugger;
        setUserGitHub(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        setErrorMsg("GitHub temporariamente fora de serviço");
        console.log(error);
      });
  }

  function getApiRepositGit() {
    const ENDPOINT = "https://api.github.com/users/RCVigil/repos";
    axios
      .get(ENDPOINT, {})
      .then(function (response) {
        setProjectsGitHub(response.data);
        console.log(projectsGitHub);
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
    projectsGitHub.map((proj, index) => {
        if (proj.private === true) {
          return(
            <div className='divProjectMap' key={proj.id}>
              <h1>{index}</h1>
              <h1>{proj.name}</h1>
              <h1>{proj.description}</h1>
              <h1>{`Criado em : ${moment(proj.created_at).format('MM / YYYY')}`}</h1>
              <h1>{`A linguagem predominante é: ${proj.language}`}</h1>
              <h1>{`Quer conhecer este projeto?`}</h1>
              <h1>{`Clique aqui! ${<a>`${proj.svn_url}`</a>}`}</h1>
              {console.log(index, proj.name)}
            </div>
          )
        }
    });
  };

  return (
    <div className="divProjetoG">
      {
        <div className="divProjectGit">
          <div>
            <h1>{userGitHub.name}</h1>
            <img src={userGitHub.avatar_url} alt="Foto do github" />
            <h1>{userGitHub.bio}</h1>
            <h1>
              {!userGitHub.company
                ? `Você pode me contratar que estou à disposição, vamos conversar? 
            Aqui você encontra todos meus contatos`
                : `Trabalhando Atualmente na empresa ${userGitHub.company}`}
            </h1>
            <h1>{`Estou no GitHub desde`}</h1>
            <h1>{experiency()}</h1>
            <h1>{userGitHub.location}</h1>
            <h1>{`O último updated foi em:`}</h1>
            <h1>{`${moment(userGitHub.updated_at).format(
              "DD / MM / YYYY"
            )}`}</h1>
          </div>
          {!projectsGitHub ? '' : console.log(ProjectFull())}
          <h3>{errorMsg}</h3>
        </div>
      }
    </div>
  );
};

export default ProjetosGithub;
