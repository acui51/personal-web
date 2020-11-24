import React from "react";
import "./Footer.module.css";

const Footer = () => {
  let d = new Date();
  d = d.getFullYear();
  return (
    <footer className="Footer">
      <small>&copy;{d} Alix Cui </small>
    </footer>
  );
};

export default Footer;
