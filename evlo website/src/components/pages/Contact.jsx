import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  // Reset initial state to empty for production use
  const [notification, setNotification] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5hey0ou', 'template_lf2k1f2', form.current, {
      publicKey: 'L7lfLonsKDfxETiTI',
    })
    .then(() => {
      console.log('SUCCESS!');
      setNotification({ message: 'Sent!', type: 'success' });
      setTimeout(() => setNotification({ message: '', type: '' }), 4000); // Auto-hide notification after 5 seconds
    },
    (error) => {
      console.log('FAILED...', error.text);
      setNotification({ message: 'Error', type: 'error' });
      setTimeout(() => setNotification({ message: '', type: '' }), 4000); // Auto-hide notification after 5 seconds
    });
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us!</h2>
        <form ref={form} onSubmit={sendEmail} className="form-control">
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea className="message-box" placeholder="Message" name="message" required></textarea>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
}

export default Contact;
