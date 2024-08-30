import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contact.css";

function Contact() {
  const formActionUrl = "https://formspree.io/f/xwpeyarg";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(formActionUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("There was a problem sending your message.");
      }
    } catch (error) {
      toast.error("There was a problem sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="concPG">
      <div className="contact">
        <h5>Contact Me Here..</h5>
        <p>I'd love to hear from you! You can reach me through:</p>
        <div className="card-body">
          <Link
            to="https://github.com/M-Shivateja"
            target="_blank"
            className="btn btn-outline-light mx-1"
          >
            <i className="bi bi-github"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shiva-teja-m-80b616239/"
            target="_blank"
            className="btn btn-outline-light mx-1"
            id="lnkdn"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link
            to="mailto:mshivateja08@gmail.com"
            target="_blank"
            className="btn btn-outline-light mx-1"
          >
            <i className="bi bi-envelope-at-fill"></i>
          </Link>
        </div>
      </div>
      <div className="contact-form container">
        <h5 className="text-center mb-4">Send me a message</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
