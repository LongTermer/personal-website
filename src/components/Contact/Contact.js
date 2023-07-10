import React, { useState } from 'react'
import './contact.css'
// import axios from 'axios';
import FormInput from '../Layout/FormInput/FormInput'
import CustomButton from '../Layout/CustomButton/CustomButton'

const ContactPage = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isClickedWhileEmpty, setIsClickedWhileEmpty] = useState(false)

  const [userMessage, setUserMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const { name, email, subject, message } = userMessage

  const handleSubmit = async (event) => {
    event.preventDefault()

    // await axios.post('/api/form', {
    //   name,
    //   email,
    //   subject,
    //   message,
    // });

    setUserMessage({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setIsClicked(true)

    setTimeout(() => setIsClicked(false), 3000)
  }

  const handleClick = () => {
    if (message !== '' && email !== '') {
      setIsClicked(true)
      setTimeout(() => setIsClicked(false), 3000)
      return
    }

    setIsClickedWhileEmpty(true)
    setTimeout(() => setIsClickedWhileEmpty(false), 3000)
    return
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setUserMessage({ ...userMessage, [name]: value })
  }

  return (
    <div className="contact-page">
      <div className="triangle" />
      <h1 className="title">CONTACT</h1>
      <div className="contact-border-line" />
      <div>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            spellCheck="false"
            autoComplete="on"
            name="name"
            placeholder="Name"
            value={name}
            handleChange={handleChange}
          />
          <FormInput
            type="email"
            spellCheck="false"
            autoComplete="on"
            name="email"
            placeholder="Email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="text"
            spellCheck="true"
            autoComplete="on"
            name="subject"
            placeholder="Subject"
            value={subject}
            handleChange={handleChange}
          />
          <textarea
            name="message"
            cols="60"
            rows="9"
            type="text"
            spellCheck="true"
            autoComplete="on"
            placeholder="Message..."
            value={message}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <div className="message-container">
            <div
              className="message-sent"
              style={{
                display: isClicked ? 'block' : 'none',
                borderRadius: '5px',
              }}
            >
              Your Message Has Been Sent!
            </div>
            <div
              className="your-message-is-empty"
              style={{
                display: isClickedWhileEmpty ? 'block' : 'none',
                borderRadius: '5px',
              }}
            >
              Your Email Or Message Is Empty
            </div>
          </div>
          <CustomButton type="submit" onClick={handleClick}>
            Submit
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
