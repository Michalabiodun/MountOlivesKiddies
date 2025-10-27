import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-facebook', url: '' },
    { icon: 'fab fa-instagram', url: '' },
    { icon: 'fab fa-twitter', url: '' }
  ];

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
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="footer-content" variants={containerVariants}>
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Mountolives Kiddies School</h3>
            <p>The Difference in Our Service is Christ</p>
          </motion.div>
          
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/">Events</Link></li>
            </ul>
          </motion.div>
          
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Contact Info</h4>
            <ul>
              <li>+234 8135490948</li>
              <li>mountoliveskiddies555@gmail.com</li>
              <li>15, Oluokun Street, Ijapo Estate, Akure.</li>
            </ul>
          </motion.div>
          
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <p>&copy; {currentYear} Mountolives Kiddies School. | All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;