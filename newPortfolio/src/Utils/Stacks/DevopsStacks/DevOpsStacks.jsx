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
      <h2 className="h2Stack2">DevOps</h2>
      <div className="divStacksContent2">
        <div className="divStackUnit2">
          <GIT />
        </div>
        <div className="divStackUnit2">
          <GITHUB />
        </div>
        <div className="divStackUnit2">
          <VERCELL />
        </div>
        <div className="divStackUnit2">
          <BITBUCKET />
        </div>
        <div className="divStackUnit2">
          <JIRA />
        </div>
      </div>
    </div>
  );
};

export default DevOpsStacks;
