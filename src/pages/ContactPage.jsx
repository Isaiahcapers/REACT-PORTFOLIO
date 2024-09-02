import React, { useState } from 'react';

export default function ContactPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textarea, setTextarea] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [textareaValid, setTextareaValid] = useState(true);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case 'exampleInputEmail1':
                setEmail(value);
                setEmailValid(value.includes('@'));
                break;
            case 'exampleInputPassword1':
                setPassword(value);
                setPasswordValid(value.length > 3);
                break;
            case 'exampleFormControlTextarea1':
                setTextarea(value);
                setTextareaValid(value.length > 0);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isFormValid = emailValid && passwordValid && textareaValid;
        if (!isFormValid) {
            event.stopPropagation();
        }
    };

    return (
        <>
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="mb-3 pt-5">
                        <label htmlFor="exampleInputEmail1" className="form-control">Email address</label>
                        <input
                            type="email"
                            className={`form-control ${emailValid ? '' : 'is-invalid'}`}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        <div className="invalid-feedback">Please provide a valid email.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-control ${passwordValid ? '' : 'is-invalid'}`}
                            id="exampleInputPassword1"
                            value={password}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="invalid-feedback">Please provide a password.</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea
                            className={`form-control ${textareaValid ? '' : 'is-invalid'}`}
                            id="exampleFormControlTextarea1"
                            rows="3"
                            value={textarea}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <div className="invalid-feedback">Please provide some text.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
}