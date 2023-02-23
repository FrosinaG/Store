import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerCon">
      <div className="footer-social-icon">
        <div className="social-icon">
          <Link
            to="https://github.com/FrosinaG?tab=repositories"
            className="social-link"
          >
            <GitHubIcon />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://www.linkedin.com" className="social-link">
            <LinkedInIcon />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://www.facebook.com/" className="social-link">
            <FacebookIcon />
          </Link>
        </div>
      </div>
      <hr />
      <div className="copy">
        <span>Copyright © 2023 </span>
      </div>
    </div>
  );
};

export default Footer;
