import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './contact.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <div className='contact-me'>
    <section id='contact-page'>
      <form id="contact-form" onSubmit={handleSubmit}>
      <h1 className='contact-header'>contact me</h1>
        <div className='form-field'>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} size='40'/>
          <br></br>
          <label htmlFor="name">name</label>
        </div>
        <div className='form-field'>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} size='40'/>
          <br></br>
          <label htmlFor="email">email address</label>
        </div>
        <div className='form-field'>
          <textarea className='message' name="message" rows="5" defaultValue={message} onBlur={handleChange} rows="15" cols="50"/>
          <br></br>
          <label htmlFor="message">message</label>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
        <br></br>
      </form>
      <iframe className='map-frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103302.12393680878!2d-78.95770616691132!3d35.99119033989305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace471120f66f1%3A0xe17ada898a46f27e!2sDurham%2C%20NC!5e0!3m2!1sen!2sus!4v1645995841646!5m2!1sen!2sus" width="500" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
      
    </section>
    </div>
  );
}

export default ContactForm;
