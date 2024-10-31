import React, { useState } from "react";
import emailIcon from "../assets/images/Pagina_cuatro.png";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [textareaValid, setTextareaValid] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameValidation, setFirstNameValidation] = useState(true);
  const [lastNameValidation, setLastNameValidation] = useState(true);
  const [subjectValidation, setSubjectValidation] = useState(true);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "exampleInputEmail1":
        setEmail(value);
        setEmailValid(value.includes("@"));
        break;
      case "FormControlTextarea1":
        setTextarea(value);
        setTextareaValid(value.length > 0);
        break;
      case "subjectInput":
        setSubject(value);
        setSubjectValidation(value.length > 0);
        break;
      case "firstNameValidation":
        setFirstName(value)
        setFirstNameValidation(value.length > 0);
        break;
      case "lastNameValidation":
        setLastName(value)
        setLastNameValidation(value.length > 0);
        break;    
      default:
        break;
    }
    reset({
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const isFormValid = emailValid && textareaValid;
  //   if (!isFormValid) {
  //     event.stopPropagation();
  //   }
  //   const formData = new FormData();
  //   formData.append("access_key", "bee49cfe-61ee-4f99-bfab-104652e55b49");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: json,
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //   }
  // };
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [subject, setSubject] = useState("");
  const accessKey = "bee49cfe-61ee-4f99-bfab-104652e55b49";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: `${firstName} ${lastName}`,
      subject: subject,

      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  console.log("isSuccess", isSuccess);
  console.log("result", result);

  return (
    <>
      <div id="formDiv">
        <form
          className="needs-validation novalidate form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input
            {...register("firstname", { required: true })}
              type="text"
              aria-label="First name"
              class={`form-control ${firstNameValidation ? "" : "is-invalid"}`}
              id="firstNameValidation"
              value={firstName}
              onChange={handleInputChange}
              required
            />
            <input
            {...register("lastname", { required: true })}
              type="text"
              aria-label="Last name"
              class={`form-control ${lastNameValidation ? "" : "is-invalid"}`}
              id="lastNameValidation"
              value={lastName}
              onChange={handleInputChange}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3 pt-1">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
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
            <div>
              <label htmlFor="subjectInput" className="form-label">
                Subject:
              </label>
              <input
                {...register("subject", { required: true })}
                value={subject}
                type="text"
                className={`form-control ${subjectValidation ? "" : "is-invalid"}`}
                id="subjectInput"
                name="subject"
                onChange={handleInputChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid subject.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="FormControlTextarea1">Leave a message:</label>
              <textarea
                {...register("message", { required: true })}
                className={`form-control ${textareaValid ? "" : "is-invalid"}`}
                id="FormControlTextarea1"
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
