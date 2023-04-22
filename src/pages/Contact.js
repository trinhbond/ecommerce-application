import React from "react";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-form">
        <h1>Get in touch</h1>
        <p>Got any questions for us? Feel free to send them below</p>
        <form>
          <label>Your first name</label>
          <input type="text" placeholder="" />
          <label>Your last name</label>
          <input type="text" placeholder="" />
          <label>Your message</label>
          <textarea placeholder="Your message" />
          <input className="button submit" type="submit" value="Submit" />
        </form>
      </div>
      <div className="aside">
        <div>
          <h6>Phone number</h6>
          <span>123-456-789</span>
        </div>
      </div>
    </div>
  );
};
