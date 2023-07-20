import React from "react";
import Javascript from "../../StacksImages/Javascript";
import HTML from "../../StacksImages/HTML";
import CSS from "../../StacksImages/CSS";
import ReactImg from "../../StacksImages/ReactImg";
import RtestingL from "../../StacksImages/RtestingL";
import JEST from "../../StacksImages/JEST";
import REDUX from "../../StacksImages/REDUX";
import VITE from "../../StacksImages/VITE";
import MATERIALUI from "../../StacksImages/MATERIALUI";
import TYPESCRIPT from "../../StacksImages/TYPESCRIPT";

import "./_frontend.sass";

const FrontEndStacks = () => {
  return (
    <div className="firstDivStackContent">
      <h2 className="h2Stack">Front-end</h2>
      <div className="divStacksContent">
        <div className="divStackUnitFront">
          <HTML />
        </div>
        <div className="divStackUnitFront">
          <CSS />
        </div>
        <div className="divStackUnitFront">
          <Javascript />
        </div>
        <div className="divStackUnitFront">
          <VITE />
        </div>
        <div className="divStackUnitFront">
          <ReactImg />
        </div>
        <div className="divStackUnitFront">
          <TYPESCRIPT />
        </div>
        <div className="divStackUnitFront">
          <REDUX />
        </div>
        <div className="divStackUnitFront">
          <RtestingL />
        </div>
        <div className="divStackUnitFront">
          <JEST />
        </div>
        <div className="divStackUnitFront">
          <MATERIALUI />
        </div>
      </div>
    </div>
  );
};

export default FrontEndStacks;
