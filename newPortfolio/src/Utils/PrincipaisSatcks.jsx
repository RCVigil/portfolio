import React from "react";
import "../Styles/Utils/PrincipaisSatacks.sass";

import FrontEndStacks from "./Stacks/FrontendStacks/FrontEndStacks";
import BackEndStacks from "./Stacks/BackendStacks/BackEndStacks";
import DevOpsStacks from "./Stacks/DevopsStacks/DevOpsStacks";
import DatabaseStacks from "./Stacks/DatabasesStacks/DatabaseStacks";
import MobileStacks from "./Stacks/MobileStacks/MobileStacks";
import SoftSkillsStacks from "./Stacks/SoftSkillsStacks/SoftSkillStacks";

const PrincipaisSatcks = () => {
  const [mobileStackStudent] = React.useState(false);
  const [softSkillsStackStudent] = React.useState(true);
  return (
    <div className="divStacksPrinc" id="principaisStacks">
      <h1 className="h1PStacks">
        As Stacks revolucionárias que impulsionaram meu sucesso!
      </h1>
      <div className="divHardskills1">
        <div className="divFrontend">
          <FrontEndStacks />
        </div>
        <div className="divBackend">
          <BackEndStacks />
        </div>
        <div className="divDatabase">
          <DatabaseStacks />
        </div>
      </div>
      <div className="divHardSkills2">
        <hr />
        <div className="divDevops">
          <DevOpsStacks />
        </div>
        {!mobileStackStudent ? (
          ""
        ) : (
          <div className="divMobile">
            <hr />
            <MobileStacks />
          </div>
        )}
      </div>
      {!softSkillsStackStudent ? (
        ""
      ) : (
        <div className="divSoftskills">
          <hr />
          <SoftSkillsStacks />
        </div>
      )}
      <h3 className="divH3PS">
        Qualquer dúvida, em relação à tecnologia é só clicar no nome, que você
        será redirecionado ao site Oficial
      </h3>
    </div>
  );
};

export default PrincipaisSatcks;
