import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ModalDiv from "./components/forms/ModalDiv";
import ReloadButton from "./components/forms/ReloadButton";
import CreateAbbrevForm from "./components/forms/CreateAbbrevForm";
import EditDeleteForm from "./components/forms/EditDeleteForm";
import Footer from "./components/Footer";

const App = () => {
  const [abbrevs, setAbbrevs] = useState([]);
  // ---------------------------------------
  const [showModelDiv, setShowModalDiv] = useState(false);
  const [showReloadDiv, setShowReloadDiv] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditDelForm, setShowEditDelForm] = useState(false);
  // ---------------------------------------
  const [abbrevId, setAbbrevId] = useState("");
  const [editAbbrevStart, setEditAbbrevStart] = useState("");
  const [editDefinStart, setEditDefinStart] = useState("");
  // ---------------------------------------
  const [newAbbrev, setNewAbbrev] = useState("");
  const [newDefinition, setNewDefinition] = useState("");
  // ---------------------------------------
  const [reload, setReload] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const URL = "http://localhost:5000";

  // Show reload. -------------------------------------------
  const showReloadModal = () => {
    setShowModalDiv(true);
    setShowReloadDiv(true);
  };
  const reloadAbbrevs = () => {
    setShowModalDiv(false);
    setShowReloadDiv(false);
    setReload((reload) => !reload);
  };
  // Read Abbreviations ---------------------------------
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw Error("The data was not returned!");
        }
        const abbrevItems = await response.json();
        setAbbrevs(abbrevItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    };
    fetchItems();
  }, [reload]);

  // Create Modal Functions ------------------------------
  const openCreateFormModal = () => {
    setShowModalDiv(true);
    setShowCreateForm(true);
  };
  const cancelCreateFormModal = () => {
    setShowModalDiv(false);
    setShowCreateForm(false);
  };
  // Create an Abbrev. -----------------------------------
  const createAbbrev = async (new_abbrev, new_definition) => {
    let newAbbrevObject = {
      abbrev: new_abbrev,
      definition: new_definition,
    };
    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAbbrevObject),
      });
    } catch (err) {
      console.log(err);
    }
  };
  // ----------------------------
  const resetHelper = () => {
    cancelCreateFormModal();
    setNewAbbrev("");
    setNewDefinition("");
  };
  // ----------------------------
  const confirmNewAbbrev = (e) => {
    e.preventDefault();
    if (
      (!newAbbrev && !newDefinition) ||
      (newAbbrev && !newDefinition) ||
      (!newAbbrev && newDefinition)
    ) {
      resetHelper();
      return;
    }
    // Fetch function call!
    createAbbrev(newAbbrev, newDefinition);
    // -----------------------------------
    resetHelper();
    showReloadModal();
  };

  // Edit and Delete Modal Functions ----------------------
  const openEditDelModal = (e) => {
    const buttonClicked = e.target;
    const buttonClickedValue = e.target.value;
    const currentAbbrevValue =
      buttonClicked.parentElement.parentElement.querySelector(
        ".abbrRow .abbrevValue"
      ).textContent;
    const currentDefinValue =
      buttonClicked.parentElement.parentElement.querySelector(
        ".abbrRow .definValue"
      ).textContent;
    // ------------------------------
    setAbbrevId(buttonClickedValue);
    setEditAbbrevStart(currentAbbrevValue);
    setEditDefinStart(currentDefinValue);
    // ------------------------------
    setShowModalDiv(true);
    setShowEditDelForm(true);
  };
  const cancelEditDel = () => {
    setAbbrevId("");
    setEditAbbrevStart("");
    setEditDefinStart("");
    // ------------------------------
    setShowModalDiv(false);
    setShowEditDelForm(false);
  };
  // Edit an Abbrev. -----------------------------------
  const editAbbrev = async (id, edited_abbrev, edited_definition) => {
    let editedAbbrevObject = {
      id: id,
      edited_abbrev: edited_abbrev,
      edited_definition: edited_definition,
    };
    try {
      await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedAbbrevObject),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const confirmEditedAbbrev = (e) => {
    e.preventDefault();
    // Fetch function call!
    editAbbrev(abbrevId, editAbbrevStart, editDefinStart);
    // -----------------------------------------------
    let editedObject = {
      _id: abbrevId,
      abbrev: editAbbrevStart,
      definition: editDefinStart,
    };
    let idArray = abbrevs.map((item) => item._id);
    let idIndexNumber = idArray.indexOf(abbrevId);
    let editedAbbrevs = abbrevs.map((item, index) => {
      if (index == idIndexNumber) {
        return editedObject;
      } else {
        return item;
      }
    });
    setAbbrevs(editedAbbrevs);
    // ------------------------------
    cancelEditDel();
  };
  // Delete an Abbrev. -----------------------------------
  const deleteAbbrev = async (delAbrv) => {
    let newAbbrevObject = {
      id: delAbrv,
    };
    try {
      await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAbbrevObject),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const confirmDelete = () => {
    // Fetch function call!
    deleteAbbrev(abbrevId);
    // ---------------------
    let amendedAbbrevs = abbrevs.filter((abbrev) => {
      return abbrev._id != abbrevId;
    });
    setAbbrevs(amendedAbbrevs);
    setAbbrevId("");
    // ------------------------------
    setShowModalDiv(false);
    setShowEditDelForm(false);
  };

  return (
    <>
      <Header />
      <Main
        abbrevsData={abbrevs}
        openEditDelModal={openEditDelModal}
        fetchError={fetchError}
      />
      {showModelDiv && <ModalDiv />}
      {showReloadDiv && <ReloadButton reloadAbbrevs={reloadAbbrevs} />}
      {showCreateForm && (
        <CreateAbbrevForm
          confirmNewAbbrev={confirmNewAbbrev}
          cancelCreateFormModal={cancelCreateFormModal}
          newAbbrev={newAbbrev}
          setNewAbbrev={setNewAbbrev}
          newDefinition={newDefinition}
          setNewDefinition={setNewDefinition}
        />
      )}
      {showEditDelForm && (
        <EditDeleteForm
          cancelEditDel={cancelEditDel}
          editAbbrevStart={editAbbrevStart}
          setEditAbbrevStart={setEditAbbrevStart}
          editDefinStart={editDefinStart}
          setEditDefinStart={setEditDefinStart}
          confirmEditedAbbrev={confirmEditedAbbrev}
          confirmDelete={confirmDelete}
        />
      )}
      <Footer openCreateFormModal={openCreateFormModal} />
    </>
  );
};

export default App;
