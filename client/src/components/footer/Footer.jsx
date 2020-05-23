import React from "react";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p> &copy; {currentYear} Ahmed osama,Osos</p>
    </div>
  );
}

export default Footer;
