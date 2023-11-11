// FeedbackForm.js
import React from 'react';

const FeedbackForm = () => {
  return (
    <div>
      <div className="contact-title">
        <h1>Say Hello</h1>
        <h2>We are always ready to serve you!</h2>
      </div>

      <div className="contact-form">
        <form id="contact-form" method="post" action="contact-form-handler.php">
          <input name="name" type="text" className="form-control" placeholder="Your Name" required />
          <br />
          <input name="email" type="email" className="form-control" placeholder="Your Email" required />
          <br />
          <textarea name="message" placeholder="Message" className="form-control" rows="10" required></textarea>
          <br />
          <input type="submit" className="form-control submit" value="SEND MESSAGE" />
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
