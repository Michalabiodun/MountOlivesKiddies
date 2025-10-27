import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutHeroBg from '../assets/images/about-hero.jpg';


const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'story', label: 'Our Story' },
    { id: 'team', label: 'Our Team' },
    { id: 'facilities', label: 'Our Facilities' },
    { id: 'achievements', label: 'Our Achievements' }
  ];

  const missionValues = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in education and child development'
    },
    {
      title: 'Innovation',
      description: 'Embracing creative teaching methods and modern educational approaches'
    },
    {
      title: 'Community',
      description: 'Building strong partnerships with families and the wider community'
    },
    {
      title: 'Growth',
      description: 'Supporting each child\'s unique journey of discovery and development'
    }
  ];

  const timelineData = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Founded as a small community initiative with a big dream: to create an educational environment where every child could thrive.'
    },
    {
      year: '2014',
      title: 'First Expansion',
      description: 'Grew from a modest 50-student school to serving over 200 families.'
    },
    {
      year: '2018',
      title: 'New Campus',
      description: 'Moved to our current state-of-the-art facility with expanded classrooms and modern learning spaces.'
    },
    {
      year: '2024',
      title: 'Today & Beyond',
      description: 'Today, Mountolives Kiddies School stands as a beacon of educational excellence in our community.'
    }
  ];

  const teamMembers = [
    {
      name: 'Mrs. Johnson',
      role: 'Principal',
      qualifications: 'PhD in Education Leadership',
      experience: '15+ years experience',
      bio: 'Dr. Johnson brings extensive experience in early childhood education and is passionate about creating inclusive learning environments.'
    },
    // ... other team members
  ];

  const facilities = [
    {
      icon: '🏫',
      title: 'Modern Classrooms',
      description: 'Interactive whiteboards, comfortable seating, and optimal learning environments designed for young learners',
      features: ['Age-appropriate furniture', 'Natural lighting', 'Learning centers', 'Technology integration']
    },
    // ... other facilities
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Best Primary School Award',
      organization: 'Regional Education Board',
      description: 'Recognized for outstanding academic performance and innovative teaching methods'
    },
    // ... other achievements
  ];

  const stats = [
    { number: '14+', label: 'Years of Excellence' },
    { number: '400+', label: 'Happy Families' },
    { number: '25+', label: 'Qualified Staff' },
    { number: '98%', label: 'Parent Satisfaction' }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
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
    <div className="about">
      {/* Page Hero */}
      <section className="page-hero" style={{backgroundImage: `url(${aboutHeroBg})`}}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Mountolives Kiddies School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our story, values, and commitment to educational excellence
          </motion.p>
          
          {/* About Navigation Tabs */}
          <div className="about-nav">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`about-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Sections */}
      <section className="about-content">
        <div className="container">
          <AnimatePresence mode="wait">
            {/* Mission Section */}
            {activeTab === 'mission' && (
              <motion.div
                id="mission"
                className="about-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="section-header">
                  <h2>Our Mission</h2>
                </div>
                <div className="mission-content">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    At Mountolives Kiddies School, our mission is to provide a nurturing and stimulating environment where every child can discover their potential, develop critical thinking skills, and grow into confident, compassionate individuals.
                  </motion.p>
                  
                  <motion.div 
                    className="mission-values"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {missionValues.map((value, index) => (
                      <motion.div
                        key={index}
                        className="value-item"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                      >
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Story Section */}
            {activeTab === 'story' && (
              <motion.div
                id="story"
                className="about-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="section-header">
                  <h2>Our Story</h2>
                  <p>Learn about our journey and commitment to educational excellence</p>
                </div>
                <div className="story-content">
                  <div className="story-timeline">
                    {timelineData.map((item, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-content">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="story-stats"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="stat-item"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Team Section */}
            {activeTab === 'team' && (
              <motion.div
                id="team"
                className="about-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="section-header">
                  <h2>Meet Our Leadership Team</h2>
                  <p>Our experienced and dedicated team of educators is committed to providing the best possible learning experience for every child</p>
                </div>
                
                <motion.div 
                  className="team-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      className="team-member"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="member-photo"></div>
                      <h3>{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <p className="member-qualifications">{member.qualifications}</p>
                      <p className="member-experience">{member.experience}</p>
                      <p className="member-bio">{member.bio}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="team-cta"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3>Join Our Team</h3>
                  <p>We're always looking for passionate educators to join our family. If you share our commitment to excellence in early childhood education, we'd love to hear from you.</p>
                  <Link to="/contact" className="btn btn-primary">View Career Opportunities</Link>
                </motion.div>
              </motion.div>
            )}

            {/* Facilities Section */}
            {activeTab === 'facilities' && (
              <motion.div
                id="facilities"
                className="about-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="section-header">
                  <h2>Our Facilities</h2>
                  <p>State-of-the-art facilities designed to support comprehensive learning and development</p>
                </div>
                
                <motion.div 
                  className="facilities-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      className="facility-card"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="facility-icon">{facility.icon}</div>
                      <h3>{facility.title}</h3>
                      <p>{facility.description}</p>
                      <ul className="facility-features">
                        {facility.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Achievements Section */}
            {activeTab === 'achievements' && (
              <motion.div
                id="achievements"
                className="about-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="section-header">
                  <h2>Our Achievements</h2>
                  <p>Recognition and awards that reflect our commitment to excellence</p>
                </div>
                
                <motion.div 
                  className="achievements-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="achievement-card"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="achievement-year">{achievement.year}</div>
                      <h3>{achievement.title}</h3>
                      <p className="award-org">{achievement.organization}</p>
                      <p className="achievement-desc">{achievement.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="achievements-cta"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3>Continuous Improvement</h3>
                  <p>We're committed to ongoing excellence and continuously strive to enhance our programs, facilities, and teaching methods to provide the best possible education for your child.</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Experience the Mountolives Difference</h2>
            <p>See for yourself why families choose Mountolives Kiddies School for their children's education</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-schedule-tour">Schedule a Visit</Link>
              <Link to="/admissions" className="btn btn-secondary">Learn About Admissions</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;