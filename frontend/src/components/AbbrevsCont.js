import React from "react";
import AbbrevsRow from "./AbbrevsRow";

const AbbrevsCont = () => {
  return (
    <div className="abbrContainer">
      <div className="abbrRow rowHeaderDiv">
        <div>
          <span className="rowHeader">Abbrev.</span>
        </div>
        <div>
          <span className="rowHeader">Definition</span>
        </div>
        <div>
          <span className="rowHeader">Update</span>
        </div>
      </div>
      <AbbrevsRow />
      <AbbrevsRow />
      <AbbrevsRow />
    </div>
  );
};

export default AbbrevsCont;
