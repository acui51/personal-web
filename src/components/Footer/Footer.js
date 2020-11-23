import React from "react";

const Footer = () => {
  let d = new Date();
  d = d.getFullYear();
  return (
    <footer style={{ position: "absolute", bottom: "0" }}>
      <small>&copy;{d} Alix Cui </small>
    </footer>
  );
};

export default Footer;
