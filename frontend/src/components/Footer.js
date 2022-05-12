import React from "react";

const Footer = ({openCreateFormModal}) => {
  return (
    <footer className="footer">
      <button type="button" onClick={openCreateFormModal}>Click to add more!</button>
    </footer>
  );
};

export default Footer;
