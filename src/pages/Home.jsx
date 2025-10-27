import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import homeHeroBg from '../assets/images/home-hero.jpg';

const Home = () => {
  const portalCards = [
    {
      title: 'Parent Portal',
      description: 'Access your child\'s grades, attendance, assignments, and communicate with teachers',
      features: ['View Grades', 'Track Attendance', 'Assignment Updates', 'Teacher Messages']
    },
    {
      title: 'Teacher Portal',
      description: 'Access teaching resources, student records, and administrative tools',
      features: ['Student Records', 'Lesson Plans', 'Grade Management', 'Staff Directory']
    },
    {
      title: 'Student Portal',
      description: 'Access homework, class schedules, and educational resources',
      features: ['Homework', 'Class Schedule', 'Learning Resources', 'School Calendar']
    },
    {
      title: 'Admin Portal',
      description: 'Access administrative tools and school management systems',
      features: []
    }
  ];

  const announcements = [
    {
      icon: '📖',
      title: 'New Academic Year 2025-2026 Registration Open',
      description: 'We are excited to announce that registration for the new academic year 2025-2026 is now open. Early bird discounts available until December 30th.',
      date: 'March 13, 2025'
    },
    // ... other announcements
  ];

  const features = [
    {
      title: 'Experienced Teachers',
      description: 'Qualified and passionate educators dedicated to your child\'s success'
    },
    // ... other features
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${homeHeroBg})`}}>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Welcome to Mountolives Kiddies School</h1>
            <p>The Difference in our Service is Christ</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-schedule-tour">Schedule a Visit</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portal Access Section */}
      <section className="portals">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Portal Access
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Access your dedicated portal for real-time updates, resources, and communication tools
          </motion.p>
          
          <motion.div 
            className="portal-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portalCards.map((portal, index) => (
              <motion.div 
                key={index}
                className="portal-card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <h3>{portal.title}</h3>
                <p>{portal.description}</p>
                {portal.features.length > 0 && (
                  <ul>
                    {portal.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                <button className="portal-btn">Access Portal</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="announcements">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest Announcements
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Stay updated with the latest news and events from our school
          </motion.p>
          
          <motion.div 
            className="announcement-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {announcements.map((announcement, index) => (
              <motion.div 
                key={index}
                className="announcement-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="announcement-icon">{announcement.icon}</div>
                <h3>{announcement.title}</h3>
                <p>{announcement.description}</p>
                <div className="announcement-date">{announcement.date}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Mountolives Kiddies School?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We provide a comprehensive educational experience that nurtures every aspect of your child's development
          </motion.p>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;