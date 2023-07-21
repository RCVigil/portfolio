import React from "react";
import NODEJS from "../../StacksImages/NODEJS";
import NESTJS from "../../StacksImages/NESTJS";
import TYPESCRIPT from "../../StacksImages/TYPESCRIPT";
import DOCKERIMG from "../../StacksImages/DOCKERIMG";

import "./_backend.sass";

const BackEndStacks = () => {
  return (
    <div className="firstDivStackContentBack">
      <h2 className="h2StackBack">Back-end</h2>
      <div className="divStacksContentBack">
        <div className="divStackUnitBack">
          <TYPESCRIPT />
        </div>
        <div className="divStackUnitBack">
          <DOCKERIMG />
        </div>
        <div className="divStackUnitBack">
          <NODEJS />
        </div>
        <div className="divStackUnitBack">
          <NESTJS />
        </div>
      </div>
    </div>
  );
};

export default BackEndStacks;
