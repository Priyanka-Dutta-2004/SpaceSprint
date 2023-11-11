// FeedbackForm.js
import React from 'react';
import './style.css';

const FeedbackForm = () => {
  return (
    <div className='feedback-bg'>
      <div className="contact-title">
        <h1>HI THERE!</h1>
        <h2>We are always ready to serve you!</h2>
      </div>

      <div className="contact-form">
        <form id="contact-form" method="post" action="contact-form-handler.php">
          <input name="name" type="text" className="form-control" placeholder="Your Name" required />
          <br />
          <input name="email" type="email" className="form-control" placeholder="Your Email" required />
          <br />
          <textarea name="message" placeholder="Message" className="form-control" rows="10" cols="50" required></textarea>
          <br />
          <input type="submit" className="form-control submit" value="SEND MESSAGE" />
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
