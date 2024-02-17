import * as React from "react";

import moment from "moment";

import { Link } from "react-router-dom";

import useTypewriter from "react-typewriter-hook";

import curriculumFStack from "../../Utils/Curriculum/CurriculumFStack-2024.pdf";

import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";

import "./_bodyPersonLeft.sass";

const BodyPersonLeft = ({ userGitHub }) => {

  const magicNameMaker = (nameMagic) => {
    const typing = useTypewriter(nameMagic);

    return typing
  };

  const experience = () => {
    const inicio = moment(userGitHub.created_at).format("MM / YYYY");
    return inicio;
  };

  const downloadMyCV = () => {
    window.open(curriculumFStack, "_blank");
  };
  return (
    <div className="Container__BodyPersonLeft">
      <div className="content__Div_Header_BodyPersonLeft">
        <h1 className="content__h1Name__BodyPersonLeft">{userGitHub.name}</h1>

        <div className="content__Div_ImgUser__BodyPersonLeft">
          <img
            className="content__imgUser__BodyPersonLeft"
            src={userGitHub?.avatar_url}
            alt="Foto do github"
          />
        </div>

        <p className="content__pBioGitUser__BodyPersonLeft magicMakerP">
          {magicNameMaker(userGitHub?.bio)}
        </p>
      </div>

      <hr className="content__Hr1__BodyPersonLeft" />

      <div className="content__Div_Company_BodyPersonLeft">
        <h1 className="content__H1BioGitUser__BodyPersonLeft companyProjGithub">
          {!userGitHub.company ? (
            <>
              <p
                className="content__pProjectGithub__BodyPersonLeft pHeaderProjectGithub"
                style={{ textAlign: "center", paddingBottom: "10%", color: "#f9f9f9" }}
              >
                Vamos conversar!
              </p>
              <p className="content__pProjectGithub__BodyPersonLeft">
                Posso contribuir com o desenvolvimento de projetos para sua
                empresa.
              </p>
              <p className="content__pProjectGithub__BodyPersonLeft">
                Aqui você encontra todos meus contatos.
              </p>
            </>
          ) : (
            <p className="content__pProjectGithub__BodyPersonLeft">
              {`Trabalhando atualmente na empresa ${userGitHub.company}`}
            </p>
          )}
        </h1>
      </div>

      <hr className="content__Hr2__BodyPersonLeft" />

      <div className="content__Div_Experience_BodyPersonLeft">
        <p>{`Estou no GitHub desde`}</p>

        <h1>{experience()}</h1>
      </div>

      <hr className="content__Hr3__BodyPersonLeft" />

      <div className="content__Div_LocationProjGithub__BodyPersonLeft">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-geo-alt content__divLocationProjGithub_SVG__BodyPersonLeft"
          viewBox="0 0 16 16"
        >
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <p className="card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4 content__pProjectGithub__BodyPersonLeft">
          {userGitHub.location}
        </p>
        <div
          className="content__imgDivProjSVG__BodyPersonLeft"
          onClick={downloadMyCV}
        >
          <h3>Baixe meu curriculum</h3>
          <div
            className="content__Curriculum__BodyPersonLeft"
            title="Clique para Baixar currículo"
          >
            <AssignmentIndRoundedIcon />
          </div>
        </div>
      </div>

      <hr className="content__Hr4__BodyPersonLeft" />

      <div className="content__Div_UpdatedAndRepository_BodyPersonLeft">
        <div className="content__DivData__BodyPersonLeft justify-content-center">
          <p className="content__DivData_P__BodyPersonLeft card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-6 mt-4">
            {`O último updated foi em:`}
          </p>

          <h1 className="content__DivData_H1__BodyPersonLeft card-text text-lg-right lh-sm font-italic text-decoration-none text-monospace fs-5 mb-5">
            {`${moment(userGitHub.updated_at).format("DD / MM / YYYY")}`}
          </h1>
        </div>

        <div className="content__DivButton__BodyPersonLeft">
          <p className="content__DivButton_P__BodyPersonLeft">
            Quer conhecer todos meus projetos?
          </p>
          <button
            // onClick={() => path.push('/projetosFull')}
            className="content__DivButton_Button__BodyPersonLeft"
          >
            <Link to="/projetosFull">
              Repositório{" "}
              <i className="content__DivButton_I__BodyPersonLeft bi bi-pc-display-horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="content__DivButton_SVG__BodyPersonLeft bi bi-pc-display-horizontal"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                </svg>
              </i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyPersonLeft;
