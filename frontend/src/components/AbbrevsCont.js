import React from "react";
import AbbrevsRow from "./AbbrevsRow";

const AbbrevsCont = ({ abbrevsData, openEditDelModal }) => {
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
      {abbrevsData.map((item) => {
        return (
          <AbbrevsRow
            key={item._id}
            _id={item._id}
            abbrev={item.abbrev}
            definition={item.definition}
            openEditDelModal={openEditDelModal}
          />
        );
      })}
    </div>
  );
};

export default AbbrevsCont;
