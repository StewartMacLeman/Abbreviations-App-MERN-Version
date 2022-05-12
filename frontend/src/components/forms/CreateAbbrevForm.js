import React from "react";

const CreateAbbrevForm = ({
  confirmNewAbbrev,
  cancelCreateFormModal,
  newAbbrev,
  setNewAbbrev,
  newDefinition,
  setNewDefinition,
}) => {
  return (
    <div className="addAbbrevModal">
      <button className="cancel" type="button" onClick={cancelCreateFormModal}>
        Cancel
      </button>

      <form onSubmit={confirmNewAbbrev}>
        <div className="abbrevInputCont">
          <label htmlFor="abbrev">Abbreviation: </label>
          <input
            type="text"
            id="abbrev"
            autoComplete="off"
            autoFocus
            value={newAbbrev}
            onChange={(e) => setNewAbbrev(e.target.value)}
          />
        </div>

        <div className="abbrevInputCont">
          <label htmlFor="abbrevDefin">Definition: </label>
          <input
            type="text"
            id="abbrevDefin"
            autoComplete="off"
            value={newDefinition}
            onChange={(e) => setNewDefinition(e.target.value)}
          />
        </div>

        <button type="submit">Add Abbrev.</button>
      </form>
    </div>
  );
};

export default CreateAbbrevForm;
