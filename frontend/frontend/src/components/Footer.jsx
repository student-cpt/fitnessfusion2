import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>AboutUs</h2>
          <p>We are committed to helping you achieve your fitness goals through personalized workouts, nutrition plans, and a supportive community.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/workouts">Workouts</a></li>
            <li><a href="/Programs">Nutrition</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/SingUp">Blog</a></li>
          </ul>
          
        </div>
        <div className="footer-section contact">
          <h2>ContactUs</h2>
          <p>Email: webcrafts@ft.com</p>
          <p>Phone:7725987821</p>
          <div className="socials">
            {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
          </div>
              
        </div>
      </div>
      <div className="footer-bottom">
        <p>Thanks</p> 
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

  


export default Footer