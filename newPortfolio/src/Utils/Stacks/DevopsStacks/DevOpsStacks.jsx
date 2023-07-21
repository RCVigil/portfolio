import React from "react";
import GIT from "../../StacksImages/GIT";
import GITHUB from "../../StacksImages/GITHUB";
import VERCELL from "../../StacksImages/VERCELL";
import BITBUCKET from "../../StacksImages/BITBUCKET";
import JIRA from "../../StacksImages/JIRA";

import "./_devops.sass";

const DevOpsStacks = () => {
  return (
    <div className="firstDivDevops">
      <h2 className="h2Stack2Devops">DevOps</h2>
      <div className="divStacksContent2Devops">
        <div className="divStackUnit2Devops">
          <GIT />
        </div>
        <div className="divStackUnit2Devops">
          <GITHUB />
        </div>
        <div className="divStackUnit2Devops">
          <VERCELL />
        </div>
        <div className="divStackUnit2Devops">
          <BITBUCKET />
        </div>
        <div className="divStackUnit2Devops">
          <JIRA />
        </div>
      </div>
    </div>
  );
};

export default DevOpsStacks;
