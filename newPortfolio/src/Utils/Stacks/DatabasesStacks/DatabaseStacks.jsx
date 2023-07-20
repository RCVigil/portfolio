import React from "react";

import './_databases.sass'
import MySqlImage from "../../StacksImages/MySqlImage";
import MongodbImages from "../../StacksImages/MongodbImages";

const DatabaseStacks = () => {
  return (
    <div className="firstDivStackContent">
      <h2 className="h2Stack">Database</h2>
      <div className="divStacksContent">
        <div className="divStackUnit">
          <MySqlImage />
        </div>
        <div className="divStackUnit">
          <MongodbImages />
        </div>
      </div>
    </div>
  );
};

export default DatabaseStacks;
