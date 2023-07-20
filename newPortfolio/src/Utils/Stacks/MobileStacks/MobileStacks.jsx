import React from "react";

import "./_mobileStacks.sass";

import RactNativeImages from "../../StacksImages/RactNativeImages";
// Import mobile stack components if available

const MobileStacks = () => {
  return (
    <div className="firstDivMobile">
      <h2 className="h2Stack2">Mobile</h2>
      <div className="divStacksContentMobile">
        <div className="divStackUnitMobile">
          <RactNativeImages />
        </div>
      </div>
    </div>
  );
};

export default MobileStacks;
