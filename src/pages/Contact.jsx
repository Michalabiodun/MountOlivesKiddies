import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import contactHeroBg from '../assets/images/contacts-hero.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const contactItems = [
    {
      title: 'Visit Us',
      content: '15, Oluokun Street, <br>Ijapo Estate, Akure'
    },
    {
      title: 'Call Us',
      content: '+234 813 549 0948'
    },
    {
      title: 'Email Us',
      content: 'mountoliveskiddies555@gmail.com'
    },
    {
      title: 'Office Hours',
      content: 'Monday - Friday: 7:00 AM - 4:00 PM<br>Saturday: Closed<br>Sunday: Closed'
    }
  ];

  const quickContactCards = [
    {
      title: 'Emergency',
      description: 'For urgent matters during school hours',
      buttonText: 'Call Now',
      buttonClass: 'btn-emergency',
      action: 'tel:+2348135490948'
    },
    {
      title: 'Admissions',
      description: 'Questions about enrollment',
      buttonText: 'Email Us',
      buttonClass: 'btn-primary',
      action: 'mailto:mountoliveskiddies555@gmail.com'
    },
    {
      title: 'General Info',
      description: 'General questions and support',
      buttonText: 'Chat Now',
      buttonClass: 'btn-secondary'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      phoneNumber: '',
      subject: '',
      message: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="contact">
      {/* Page Hero */}
      <section className="page-hero" style={{backgroundImage: `url(${contactHeroBg})`}}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you! Get in touch with our team for any questions about enrollment, programs, or to schedule a visit.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div 
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contact-details" variants={itemVariants}>
              <h2>Get in Touch</h2>
              <div className="contact-items-grid">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    whileHover={{ y: -5 }}
                  >
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="contact-form" variants={itemVariants}>
              <h2>Send us a Message</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions</option>
                    <option value="general">General Information</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Find Us
          </motion.h2>
          <div className="map-container">
            {/* Google Maps Embed */}
            <motion.div 
              className="map-embed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31662.05418975849!2d5.1771192643790185!3d7.268496081159512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478fcf84328e3b%3A0x3e56f119f01a1890!2s15%20Oluokun%20St%2C%20Akure%20340110%2C%20Ondo!5e0!3m2!1sen!2sng!4v1761417019745!5m2!1sen!2sng" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mountolives Kiddies School Location"
              />
            </motion.div>

            {/* Right column: features + info card (stacked) */}
            <motion.div 
              className="map-side"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="map-features">
                <h4>Campus Features</h4>
                <ul>
                  <li>✅ Free parking available</li>
                  <li>✅ Security on campus</li>
                  <li>✅ Visitor parking near main entrance</li>
                </ul>
              </div>

              <motion.div 
                className="map-info-card"
                whileHover={{ y: -5 }}
              >
                <h3>Visit Our Campus</h3>
                <div className="map-address">
                  <div className="address-icon">📍</div>
                  <div className="address-details">
                    <strong>Mountolives Kiddies School</strong><br/>
                    15, Oluokun Street<br/>
                    Ijapo Estate, Akure<br/>
                    Ondo State, Nigeria
                  </div>
                </div>

                <div className="map-cta">
                  <p><strong>Planning a visit?</strong> Let us know you're coming!</p>
                  <Link to="/contact" className="btn btn-schedule-tour">Schedule a Tour</Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Quick Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Need immediate assistance? Choose the best way to reach us.
          </motion.p>
          
          <motion.div 
            className="quick-contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {quickContactCards.map((card, index) => (
              <motion.div
                key={index}
                className="quick-contact-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card.action ? (
                  <motion.a
                    href={card.action}
                    className={`btn ${card.buttonClass}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.buttonText}
                  </motion.a>
                ) : (
                  <motion.button
                    className={`btn ${card.buttonClass} chat-trigger`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.buttonText}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;