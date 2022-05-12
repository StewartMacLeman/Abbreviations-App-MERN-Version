import React from "react";
import AbbrevsCont from "./AbbrevsCont";

const Main = ({ abbrevsData, openEditDelModal, fetchError }) => {
  return (
    <main className="main">
      {!fetchError && <h3>Your Abbrevs.</h3>}
      {fetchError && <h3>{fetchError}</h3>}
      <AbbrevsCont
        abbrevsData={abbrevsData}
        openEditDelModal={openEditDelModal}
      />
    </main>
  );
};

export default Main;
