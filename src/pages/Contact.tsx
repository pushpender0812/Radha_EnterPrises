// import React from 'react';
import '../css/Contact.css'; // Custom CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="text-center text-4xl font-bold mb-8">Contact Us</h2>
      <p className="text-center text-lg mb-8">
        We would love to hear from you! Here are our contact details:
      </p>

      <div className="contact-details">
        <div className="detail-item">
          <h3 className="text-2xl font-semibold">Email:</h3>
          <p className="text-lg">info@radhaenterprises.com</p>
        </div>
        <div className="detail-item">
          <h3 className="text-2xl font-semibold">Mobile:</h3>
          <p className="text-lg">+91 98765 43210</p>
        
        </div>
        <div className="detail-item">
          <h3 className="text-2xl font-semibold">Address:</h3>
          <p className="text-lg">1234 Infrastructure Lane, City, State, 56789</p>
          <p className="text-lg">Monday to Saturday : 9am to 6pm</p>
        </div>
      </div>

      <div className="contact-images">
        <img src="data:image/jpeg;base64,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" alt="Contact Image 1" className="contact-image" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArGZsVrLcuOFEWer_rT5ifqeDH6vbU1VmGw&s" alt="Contact Image 2" className="contact-image" />
      </div>
    </div>
  );
};

export default Contact;
