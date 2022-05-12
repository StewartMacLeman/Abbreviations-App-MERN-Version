import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ModalDiv from "./components/forms/ModalDiv";
import ReloadButton from "./components/forms/ReloadButton";
import CreateAbbrevForm from "./components/forms/CreateAbbrevForm";
import EditDeleteForm from "./components/forms/EditDeleteForm";
import Footer from "./components/Footer";

const App = () => {
  const testData = [
    { _id: "test_1", abbrev: "URL", definition: "Uniform Resource Locator" },
    {
      _id: "test_2",
      abbrev: "URI",
      definition: "Uniform Resource Indentifier",
    },
    { _id: "test_3", abbrev: "URN", definition: "Uniform Resource Name" },
    {
      _id: "test_4",
      abbrev: "API",
      definition: "Application Programming Interface",
    },
  ];
  const [showModelDiv, setShowModelDiv] = useState(false);
  const [showReloadDiv, setShowReloadDiv] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditDelForm, setShowEditDelForm] = useState(false);
  const [abbrevId, setAbbrevId] = useState("");
  const [editAbbrevStart, setEditAbbrevStart] = useState("");
  const [editDefinStart, setEditDefinStart] = useState("");

  // Create Modal Functions ------------------------------
  const openCreateFormModal = () => {
    setShowModelDiv(true);
    setShowCreateForm(true);
  };
  const cancelCreateFormModal = () => {
    setShowModelDiv(false);
    setShowCreateForm(false);
  };
  // Create an Abbrev. -----------------------------------
  const confirmNewAbbrev = (e) => {
    e.preventDefault();
    console.log("The confirm add button was clicked!");
    cancelCreateFormModal();
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
    setShowModelDiv(true);
    setShowEditDelForm(true);
  };
  const cancelEditDel = () => {
    setAbbrevId("");
    setEditAbbrevStart("");
    setEditDefinStart("");
    // ------------------------------
    setShowModelDiv(false);
    setShowEditDelForm(false);
  };
  // Edit an Abbrev. -----------------------------------
  const confirmEditedAbbrev = (e) => {
    e.preventDefault();
    console.log("The confirm Edited button was clicked!");
    // ------------------------------
    setShowModelDiv(false);
    setShowEditDelForm(false);
  };
  // Delete an Abbrev. -----------------------------------
  const confirmDelete = () => {
    console.log("The Delete button was clicked!");
    // ------------------------------
    setShowModelDiv(false);
    setShowEditDelForm(false);
  };

  return (
    <>
      <Header />
      <Main abbrevsData={testData} openEditDelModal={openEditDelModal} />
      {showModelDiv && <ModalDiv />}
      {showReloadDiv && <ReloadButton />}
      {showCreateForm && (
        <CreateAbbrevForm
          confirmNewAbbrev={confirmNewAbbrev}
          cancelCreateFormModal={cancelCreateFormModal}
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
