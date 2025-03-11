import './Creditos.css'

import { useState } from 'react';

import sociais from "./assets/sociais.png"
import visa from "./assets/visa.jpg"
import pay from "./assets/pay.jpg"
import paygoogle from "./assets/paygoogle.jpg"
import mastercard from "./assets/mastercard.jpg"
import paypal from "./assets/paypal.jpg"


export default function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Invalid email address');
    } else {
      setError('');
      alert('Subscribed successfully!');
      setEmail('');
    }
  };

  return (
    <div>
      <div className="newsletter">
        <h3>STAY UP TO DATE ABOUT<br />OUR LATEST OFFERS</h3>
        <form id="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe to Newsletter</button>
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>

      <footer className="footer">
        <div className="footer-brand">
          <h1>SHOP.CO</h1>
          <p>
            We have clothes that suit your style and<br />which you're proud to wear.<br />
            From women to men.
          </p>
          <div className="footer-social">
            <img src= {sociais} alt="footer-social" />
          </div>
        </div>

        <div className="footer-links">
          {[{
            title: 'COMPANY',
            links: ['About', 'Features', 'Works', 'Career']
          }, {
            title: 'HELP',
            links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']
          }, {
            title: 'FAQ',
            links: ['Account', 'Manage Deliveries', 'Orders', 'Payment']
          }, {
            title: 'RESOURCES',
            links: ['Free eBook', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist']
          }].map((section, index) => (
            <div key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-methods">
                    <img src= {visa} alt="Visa"/>
                    <img src= {mastercard} alt="MasterCard"/>
                    <img src= {paypal} alt="PayPal"/>
                    <img src= {pay} alt="Apple Pay"/>
                    <img src= {paygoogle} alt="Google Pay"/>
          </div>
        </div>
      </footer>
    </div>  
    
  );
}
