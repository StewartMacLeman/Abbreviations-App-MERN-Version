import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ModalDiv from "./components/forms/ModalDiv";
import ReloadButton from "./components/forms/ReloadButton";
import CreateAbbrevForm from "./components/forms/CreateAbbrevForm";
import EditDeleteForm from "./components/forms/EditDeleteForm";
import Footer from "./components/Footer";

const App = () => {
  const [showModelDiv, setShowModelDiv] = useState(false);
  const [showReloadDiv, setShowReloadDiv] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditDelForm, setShowEditDelForm] = useState(false);

  return (
    <>
      <Header />
      <Main />
      {showModelDiv && <ModalDiv />}
      {showReloadDiv && <ReloadButton />}
      {showCreateForm && <CreateAbbrevForm />}
      {showEditDelForm && <EditDeleteForm />}
      <Footer />
    </>
  );
};

export default App;
