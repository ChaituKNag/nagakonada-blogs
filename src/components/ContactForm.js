import React, { useState } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import fetch from "unfetch";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      "form-name": e.target.getAttribute("name"),
      fullName: form.fullName.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
      mode: "no-cors"
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitted(true);
      });
  };

  if (submitted) {
    return (
      <div className="card shadow--sm">
        <div className="card__body">
          <p>
            Thanks for contacting me. Now sit back, relax and explore some of my
            articles <Link to={useBaseUrl("all-articles/")}>here</Link> , while
            I freakishly search for that reply button.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="card shadow--sm">
      <div className="card__body">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          name="contact-nagakonada"
          method="post"
          data-netlify={true}
        >
          <div className="margin-bottom--md">
            <input
              required
              type="text"
              name="fullName"
              className="input-field button button--outline button--secondary button--block text--left"
              placeholder="Full Name"
            />
          </div>
          <div className="margin-bottom--md">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="input-field button button--outline button--secondary button--block text--left"
            />
          </div>
          <div className="margin-bottom--md">
            <input
              required
              type="text"
              name="subject"
              placeholder="Subject"
              className="input-field button button--outline button--secondary button--block text--left"
            />
          </div>
          <div className="margin-bottom--md">
            <textarea
              required
              name="message"
              placeholder="Message"
              className="input-field button button--outline button--secondary button--block text--left"
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
