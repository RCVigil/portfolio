import React from "react";
import NODEJS from "../../StacksImages/NODEJS";
import NESTJS from "../../StacksImages/NESTJS";
import TYPESCRIPT from "../../StacksImages/TYPESCRIPT";

import "./_backend.sass";

const BackEndStacks = () => {
  return (
    <div className="firstDivStackContent">
      <h2 className="h2Stack">Back-end</h2>
      <div className="divStacksContent">
        <div className="divStackUnit">
          <NODEJS />
        </div>
        <div className="divStackUnit">
          <NESTJS />
        </div>
        <div className="divStackUnit">
          <TYPESCRIPT />
        </div>
      </div>
    </div>
  );
};

export default BackEndStacks;
