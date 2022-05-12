import React from "react";

const AbbrevsRow = ({ _id, abbrev, definition, openEditDelModal }) => {
  return (
    <div className="abbrRow">
      <div>
        <span className="abbrevValue">{abbrev}</span>
      </div>
      <div>
        <span className="definValue">{definition}</span>
      </div>
      <div>
        <button type="button" value={_id} onClick={openEditDelModal}>
          Update
        </button>
      </div>
    </div>
  );
};

export default AbbrevsRow;
