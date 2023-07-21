import React from "react";

import "./_mobileStacks.sass";

import RactNativeImages from "../../StacksImages/RactNativeImages";
// Import mobile stack components if available

const MobileStacks = () => {
  return (
    <div className="firstDivMobile">
      <h2 className="h2Stack2Mobile">Mobile</h2>
      <div className="divStacksContent2Mobile">
        <div className="divStackUnit2Mobile">
          <RactNativeImages />
        </div>
      </div>
    </div>
  );
};

export default MobileStacks;
