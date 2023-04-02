import React from 'react'
import '../scss/contact.scss'

export const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-form'>
      <h1>Get in touch</h1>
      <p>Got any questions for us? Feel free to send them below</p>
      <form>
        <label for="fname">Your first name</label>
        <input type="text" id="fname" name="fname" value="John" />
        <label for="lname">Your last name</label>
        <input type="text" id="lname" name="lname" value="Doe" />
        <label for="textarea">Your message</label>
        <textarea placeholder='Your message' />
        <input type="submit" value="Submit" />
      </form>
      </div>
      <div className='aside'>
        <div>
          <h6>Phone number</h6>
          <span>123-456-789</span>
        </div>
      </div>
    </div>
  )
}