import React from "react";

import "./_databases.sass";
import MySqlImage from "../../StacksImages/MySqlImage";
import MongodbImages from "../../StacksImages/MongodbImages";

const DatabaseStacks = () => {
  return (
    <div className="firstDivStackContentDB">
      <h2 className="h2StackDB">Database</h2>
      <div className="divStacksContentDB">
        <div className="divStackUnitDB">
          <MySqlImage />
        </div>
        <div className="divStackUnitDB">
          <MongodbImages />
        </div>
      </div>
    </div>
  );
};

export default DatabaseStacks;
