import React from "react";

const EditDeleteForm = () => {
  return (
    <div className="updateAbbrevModal">
      <button className="delete" type="button">
        Delete Item!
      </button>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="abbrevInputCont">
          <label htmlFor="abbrevUpd">Abbreviation: </label>
          <input type="text" id="abbrevUpd" autoComplete="off" autoFocus />
        </div>

        <div className="abbrevInputCont">
          <label htmlFor="abbrevDefinUpd">Definition: </label>
          <input type="text" id="abbrevDefinUpd" autoComplete="off" />
        </div>

        <div className="updButtonsCont">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit">Update Abbrev.</button>
        </div>
      </form>
    </div>
  );
};

export default EditDeleteForm;
