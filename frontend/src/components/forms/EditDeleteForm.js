import React from "react";

const EditDeleteForm = ({
  cancelEditDel,
  editAbbrevStart,
  setEditAbbrevStart,
  editDefinStart,
  setEditDefinStart,
  confirmEditedAbbrev,
  confirmDelete,
}) => {
  return (
    <div className="updateAbbrevModal">
      <button className="delete" type="button" onClick={confirmDelete}>
        Delete Item!
      </button>

      <form onSubmit={confirmEditedAbbrev}>
        <div className="abbrevInputCont">
          <label htmlFor="abbrevUpd">Abbreviation: </label>
          <input
            type="text"
            id="abbrevUpd"
            autoComplete="off"
            autoFocus
            value={editAbbrevStart}
            onChange={(e) => setEditAbbrevStart(e.target.value)}
          />
        </div>

        <div className="abbrevInputCont">
          <label htmlFor="abbrevDefinUpd">Definition: </label>
          <input
            type="text"
            id="abbrevDefinUpd"
            autoComplete="off"
            value={editDefinStart}
            onChange={(e) => setEditDefinStart(e.target.value)}
          />
        </div>

        <div className="updButtonsCont">
          <button type="button" className="cancel" onClick={cancelEditDel}>
            Cancel
          </button>
          <button type="submit">Update Abbrev.</button>
        </div>
      </form>
    </div>
  );
};

export default EditDeleteForm;
