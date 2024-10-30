import React, { useState } from "react";
import emailIcon from "../assets/images/Pagina_cuatro.png";
export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [textareaValid, setTextareaValid] = useState(true);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "exampleInputEmail1":
        setEmail(value);
        setEmailValid(value.includes("@"));
        break;
      case "exampleFormControlTextarea1":
        setTextarea(value);
        setTextareaValid(value.length > 0);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = emailValid && textareaValid;
    if (!isFormValid) {
      event.stopPropagation();
    }
    const formData = new FormData();
    formData.append("access_key", "bee49cfe-61ee-4f99-bfab-104652e55b49");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <>
      <div id="formDiv">
        <form className="needs-validation novalidate form" onSubmit={handleSubmit}>
          <div className="mb-3 pt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className={`form-control ${emailValid ? "" : "is-invalid"}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleInputChange}
              required
              placeholder="Your_email@email.com"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea:
              </label>
              <textarea
                className={`form-control ${textareaValid ? "" : "is-invalid"}`}
                id="exampleFormControlTextarea1"
                rows="3"
                value={textarea}
                onChange={handleInputChange}
                required
              ></textarea>
              <div className="invalid-feedback">Please provide some text.</div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div>
          <img
            src={emailIcon}
            alt="email Icon"
            className="img-fluid"
            id="contactImg"
          />
        </div>
      </div>
    </>
  );
}
