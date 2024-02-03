// Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{marginLeft:'100px'}} className="footer-column">
          <img
            style={{ width: "90px" }}
            src="https://themes.materializecss.com/cdn/shop/t/1/assets/materialize-logo.png?v=179096390591197713681528499937"
            alt=""
          />
          <br />
          <text>Made with love by Materialize</text>
        </div>
        <div style={{ marginLeft: "30px" }} className="footer-column">
          <h3>About</h3>
          <ul>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Docs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <div>
            <ul>
              <li>Community</li>
              <li>Subscribe</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
