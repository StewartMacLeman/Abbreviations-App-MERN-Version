import React from "react";
import AbbrevsCont from "./AbbrevsCont";

const Main = ({abbrevsData, openEditDelModal}) => {
  return (
    <main className="main">
      <h3>Your Abbrevs.</h3>
      <AbbrevsCont abbrevsData={abbrevsData} openEditDelModal={openEditDelModal}/>
    </main>
  );
};

export default Main;
