import React from "react";
import { Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";

export const Contact = () => {
  return (
    <div className="contactCont">
      <div className="contact-mob-text">
        <Typography variant="h2">CONTACT US</Typography>
        <Typography variant="h4">HAVE YOU SOME QUESTIONS ?</Typography>
        <h2 className="grey">How Can We Help You?</h2>
      </div>
      <div className="contactForm">
        <form
          action="https://formsubmit.co/frosina.gagovski@gmail.com"
          method="POST"
        >
          <div className="mb-3 ">
            <label className="form-label ">
              <PersonIcon />
            </label>
            <input
              type="text"
              className="form-control"
              name="text"
              placeholder="Enter Your Name"
              required
            />
            <input type="hidden" name="next" value="Thankyou" />
          </div>
          <div className="mb-3 ">
            <label className="form-label ">
              <AlternateEmailIcon />
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder=" Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <MailIcon />
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              placeholder="Your Messages"
              required
            ></textarea>
          </div>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            type="submit"
            value="submit"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};
