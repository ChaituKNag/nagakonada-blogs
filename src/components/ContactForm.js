import React from "react";

const ContactForm = () => {
  return (
    <div className="card shadow--md">
      <div className="card__body">
        <form>
          <div className="margin-bottom--md">
            <input
              required
              type="text"
              name="fullName"
              className="button button--outline button--secondary button--block text--left"
              placeholder="Full Name"
            />
          </div>
          <div className="margin-bottom--md">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="button button--outline button--secondary button--block text--left"
            />
          </div>
          <div className="margin-bottom--md">
            <input
              required
              type="text"
              name="subject"
              placeholder="Subject"
              className="button button--outline button--secondary button--block text--left"
            />
          </div>
          <div className="margin-bottom--md">
            <textarea
              required
              name="message"
              placeholder="Message"
              className="button button--outline button--secondary button--block text--left"
            ></textarea>
          </div>

          <button type="submit" class="button button--primary">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
